// ComfyUI API Bridge
// This module handles communication between the character generator and ComfyUI

class ComfyUIBridge {
    constructor(baseUrl = 'http://localhost:8188') {
        this.baseUrl = baseUrl;
        this.clientId = this.generateClientId();
        this.websocket = null;
        this.isConnected = false;
        this.currentPromptId = null;
        this.onProgress = null;
        this.onComplete = null;
        this.onError = null;
    }

    generateClientId() {
        return `coc_character_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }

    // Test connection to ComfyUI
    async testConnection() {
        try {
            const response = await fetch(`${this.baseUrl}/system_stats`);
            if (response.ok) {
                this.isConnected = true;
                return { success: true, data: await response.json() };
            } else {
                throw new Error('Failed to connect');
            }
        } catch (error) {
            this.isConnected = false;
            return { success: false, error: error.message };
        }
    }

    // Get queue information
    async getQueue() {
        try {
            const response = await fetch(`${this.baseUrl}/queue`);
            return await response.json();
        } catch (error) {
            console.error('Error getting queue:', error);
            return null;
        }
    }

    // Get available models
    async getModels() {
        try {
            const response = await fetch(`${this.baseUrl}/object_info`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error getting models:', error);
            return null;
        }
    }

    // Create a WebSocket connection for real-time updates
    connectWebSocket() {
        if (this.websocket) {
            this.websocket.close();
        }

        const wsUrl = this.baseUrl.replace('http', 'ws') + '/ws?clientId=' + this.clientId;
        this.websocket = new WebSocket(wsUrl);

        this.websocket.onopen = () => {
            console.log('WebSocket connected to ComfyUI');
        };

        this.websocket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            this.handleWebSocketMessage(data);
        };

        this.websocket.onclose = () => {
            console.log('WebSocket disconnected from ComfyUI');
        };

        this.websocket.onerror = (error) => {
            console.error('WebSocket error:', error);
            if (this.onError) {
                this.onError('WebSocket connection error');
            }
        };
    }

    handleWebSocketMessage(data) {
        const { type, data: messageData } = data;

        switch (type) {
            case 'status':
                if (messageData.sid === this.currentPromptId) {
                    if (this.onProgress) {
                        this.onProgress(messageData);
                    }
                }
                break;

            case 'progress':
                if (messageData.prompt_id === this.currentPromptId) {
                    if (this.onProgress) {
                        this.onProgress({
                            step: messageData.value,
                            max: messageData.max,
                            node: messageData.node
                        });
                    }
                }
                break;

            case 'executed':
                if (messageData.prompt_id === this.currentPromptId) {
                    this.handleExecutionComplete(messageData);
                }
                break;

            case 'execution_error':
                if (messageData.prompt_id === this.currentPromptId) {
                    if (this.onError) {
                        this.onError(messageData);
                    }
                }
                break;
        }
    }

    async handleExecutionComplete(data) {
        // Get the generated images
        try {
            const images = await this.getGeneratedImages(data.output);
            if (this.onComplete) {
                this.onComplete(images);
            }
        } catch (error) {
            if (this.onError) {
                this.onError('Failed to retrieve generated images');
            }
        }
    }

    // Get generated images from ComfyUI
    async getGeneratedImages(output) {
        const images = [];
        
        for (const nodeId in output) {
            const nodeOutput = output[nodeId];
            if (nodeOutput.images) {
                for (const imageData of nodeOutput.images) {
                    const imageUrl = `${this.baseUrl}/view?filename=${imageData.filename}&subfolder=${imageData.subfolder}&type=${imageData.type}`;
                    
                    try {
                        const response = await fetch(imageUrl);
                        const blob = await response.blob();
                        const imageDataUrl = await this.blobToDataURL(blob);
                        
                        images.push({
                            filename: imageData.filename,
                            subfolder: imageData.subfolder,
                            type: imageData.type,
                            url: imageUrl,
                            dataUrl: imageDataUrl
                        });
                    } catch (error) {
                        console.error('Error fetching image:', error);
                    }
                }
            }
        }
        
        return images;
    }

    blobToDataURL(blob) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    }

    // Generate character image using the DuoColot nodes
    async generateCharacterImage(characterData, options = {}) {
        if (!this.isConnected) {
            throw new Error('Not connected to ComfyUI');
        }

        // Create the workflow with DuoColot nodes
        const workflow = this.createCharacterWorkflow(characterData, options);

        try {
            // Connect WebSocket for progress updates
            this.connectWebSocket();

            // Submit the prompt
            const response = await fetch(`${this.baseUrl}/prompt`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt: workflow,
                    client_id: this.clientId
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            this.currentPromptId = result.prompt_id;

            return {
                success: true,
                promptId: result.prompt_id,
                queueNumber: result.number
            };

        } catch (error) {
            throw new Error(`Failed to generate image: ${error.message}`);
        }
    }

    // Create a workflow specifically for character generation
    createCharacterWorkflow(characterData, options) {
        const {
            style = 'realistic',
            quality = 'standard',
            seed = -1,
            steps = 20,
            cfg = 7.0,
            sampler = 'euler',
            scheduler = 'normal'
        } = options;

        // Determine image dimensions based on quality
        let width = 512, height = 512;
        switch(quality) {
            case 'draft': width = 512; height = 512; break;
            case 'standard': width = 768; height = 768; break;
            case 'high': width = 1024; height = 1024; break;
        }

        // Generate the base prompt
        const basePrompt = this.generatePromptFromCharacter(characterData, style);

        // Create the workflow using DuoColot nodes
        const workflow = {
            "1": {
                "class_type": "CheckpointLoaderSimple",
                "inputs": {
                    "ckpt_name": "sd_xl_base_1.0.safetensors" // Default model, can be changed
                }
            },
            "2": {
                "class_type": "DuoColotPromptTagReplacer",
                "inputs": {
                    "prompt": basePrompt,
                    "clip": ["1", 1],
                    "gender_choice": this.determineGender(characterData),
                    "class_choice": this.mapOccupationToClass(characterData.occupation),
                    "style_choice": style,
                    "weapon_choice": this.determineWeapon(characterData),
                    "race_choice": "human",
                    "strength_multiplier": 1.0,
                    "parse_emphasis": true,
                    "randomness_enabled": false
                }
            },
            "3": {
                "class_type": "CLIPTextEncode",
                "inputs": {
                    "text": "blurry, low quality, distorted, deformed, bad anatomy, worst quality, low quality, normal quality, lowres, bad hands, bad fingers, extra fingers, missing fingers, watermark, signature",
                    "clip": ["1", 1]
                }
            },
            "4": {
                "class_type": "EmptyLatentImage",
                "inputs": {
                    "width": width,
                    "height": height,
                    "batch_size": 1
                }
            },
            "5": {
                "class_type": "KSampler",
                "inputs": {
                    "seed": seed,
                    "steps": steps,
                    "cfg": cfg,
                    "sampler_name": sampler,
                    "scheduler": scheduler,
                    "denoise": 1.0,
                    "model": ["1", 0],
                    "positive": ["2", 0],
                    "negative": ["3", 0],
                    "latent_image": ["4", 0]
                }
            },
            "6": {
                "class_type": "VAEDecode",
                "inputs": {
                    "samples": ["5", 0],
                    "vae": ["1", 2]
                }
            },
            "7": {
                "class_type": "SaveImage",
                "inputs": {
                    "filename_prefix": `character_${characterData.name.replace(/\s+/g, '_') || 'investigator'}`,
                    "images": ["6", 0]
                }
            }
        };

        return workflow;
    }

    // Generate prompt based on character data
    generatePromptFromCharacter(characterData, style) {
        const occupation = characterData.occupation;
        const occData = occupation === 'custom' ? 
            { name: characterData.customOccupation.name || "survivor", appearance: "practical clothing, survival gear" } :
            occupations[occupation] || { name: "survivor", appearance: "worn clothing, makeshift equipment" };

        // Physical traits based on attributes
        let physicalTraits = [];
        if (characterData.attributes.str >= 70) physicalTraits.push("muscular build");
        else if (characterData.attributes.str <= 40) physicalTraits.push("slight build");

        if (characterData.attributes.app >= 70) physicalTraits.push("attractive features");
        else if (characterData.attributes.app <= 40) physicalTraits.push("weathered appearance");

        if (characterData.attributes.siz >= 70) physicalTraits.push("tall stature");
        else if (characterData.attributes.siz <= 40) physicalTraits.push("short stature");

        // Age descriptor
        let ageDescriptor = "adult";
        const age = parseInt(characterData.age);
        if (age < 25) ageDescriptor = "young";
        else if (age > 50) ageDescriptor = "middle-aged";
        else if (age > 65) ageDescriptor = "elderly";

        // Build the prompt
        let prompt = `<GENDER> <CLASS> character portrait`;

        // Add physical characteristics
        if (physicalTraits.length > 0) {
            prompt += `, ${physicalTraits.join(', ')}`;
        }

        // Add occupation-specific appearance
        prompt += `, ${occData.appearance}`;

        // Add setting context
        prompt += `, post-apocalyptic setting, year 2053, wasteland survivor`;

        // Add age
        prompt += `, ${ageDescriptor}`;

        // Style-specific additions
        switch(style) {
            case 'realistic':
                prompt += `, photorealistic, detailed portrait, professional photography`;
                break;
            case 'post_apocalyptic':
                prompt += `, gritty atmosphere, dirty, battle-worn, makeshift equipment, dust and debris`;
                break;
            case 'cyberpunk':
                prompt += `, cyberpunk aesthetic, neon lights, tech implants, futuristic elements`;
                break;
            case 'wasteland':
                prompt += `, Mad Max style, desert wasteland, improvised gear, rusty metal`;
                break;
            case 'survivor':
                prompt += `, practical clothing, scavenged equipment, resourceful appearance`;
                break;
        }

        return prompt;
    }

    // Helper methods for character mapping
    determineGender(characterData) {
        const name = characterData.name.toLowerCase();
        // Simple heuristic for Portuguese names
        if (name.includes('marcus') || name.includes('joão') || name.includes('carlos') || 
            name.includes('pedro') || name.includes('antonio') || name.includes('jose')) {
            return 'male';
        } else if (name.includes('maria') || name.includes('ana') || name.includes('julia') || 
                   name.includes('lucia') || name.includes('carla') || name.includes('fernanda')) {
            return 'female';
        }
        return 'random';
    }

    mapOccupationToClass(occupation) {
        const mappings = {
            'scavenger': 'rogue',
            'mechanic': 'ranger',
            'medic': 'mage',
            'trader': 'rogue',
            'guard': 'warrior',
            'scout': 'ranger',
            'cultist': 'necromancer',
            'mutant_hunter': 'warrior',
            'scholar': 'mage'
        };
        return mappings[occupation] || 'random';
    }

    determineWeapon(characterData) {
        const occupation = characterData.occupation;
        const weaponMappings = {
            'guard': 'gun',
            'mutant_hunter': 'gun',
            'scout': 'bow',
            'scholar': 'staff',
            'cultist': 'staff',
            'mechanic': 'dagger',
            'medic': 'dagger'
        };
        return weaponMappings[occupation] || 'random';
    }

    // Utility method to load a custom workflow from file
    async loadCustomWorkflow(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const workflow = JSON.parse(e.target.result);
                    resolve(workflow);
                } catch (error) {
                    reject(new Error('Invalid JSON workflow file'));
                }
            };
            reader.onerror = () => reject(new Error('Failed to read file'));
            reader.readAsText(file);
        });
    }

    // Update workflow with character data
    updateWorkflowWithCharacterData(workflow, characterData, options = {}) {
        const prompt = this.generatePromptFromCharacter(characterData, options.style || 'realistic');
        
        // Find and update prompt nodes
        Object.keys(workflow).forEach(nodeId => {
            const node = workflow[nodeId];
            
            // Update DuoColot nodes
            if (node.class_type === "DuoColotPromptTagReplacer") {
                node.inputs.prompt = prompt;
                node.inputs.gender_choice = this.determineGender(characterData);
                node.inputs.class_choice = this.mapOccupationToClass(characterData.occupation);
                node.inputs.style_choice = options.style || 'realistic';
                node.inputs.weapon_choice = this.determineWeapon(characterData);
            }
            
            // Update resolution nodes
            if (node.class_type === "EmptyLatentImage") {
                const { width = 768, height = 768 } = options;
                node.inputs.width = width;
                node.inputs.height = height;
            }
            
            // Update sampler settings
            if (node.class_type === "KSampler") {
                const { seed = -1, steps = 20, cfg = 7.0 } = options;
                node.inputs.seed = seed;
                node.inputs.steps = steps;
                node.inputs.cfg = cfg;
            }
            
            // Update standard CLIP text nodes as fallback
            if (node.class_type === "CLIPTextEncode" && node.inputs.text) {
                if (node.inputs.text.includes("PLACEHOLDER") || node.inputs.text.length < 50) {
                    node.inputs.text = prompt;
                }
            }
        });
        
        return workflow;
    }

    // Cancel current generation
    async cancelGeneration() {
        if (this.currentPromptId) {
            try {
                await fetch(`${this.baseUrl}/interrupt`, {
                    method: 'POST'
                });
                this.currentPromptId = null;
                return true;
            } catch (error) {
                console.error('Failed to cancel generation:', error);
                return false;
            }
        }
        return false;
    }

    // Clear queue
    async clearQueue() {
        try {
            await fetch(`${this.baseUrl}/queue`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "clear": true
                })
            });
            return true;
        } catch (error) {
            console.error('Failed to clear queue:', error);
            return false;
        }
    }
}

// Export for use in the character generator
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ComfyUIBridge;
} else if (typeof window !== 'undefined') {
    window.ComfyUIBridge = ComfyUIBridge;
}