class ComfyUIGenerator {
    constructor() {
        this.apiUrl = 'http://localhost:5000';
        this.isGenerating = false;
    }

    async generateImage() {
        if (this.isGenerating) {
            alert('Generation already in progress...');
            return;
        }

        try {
            this.isGenerating = true;
            this.updateButton('Generating...');

            // Get character data from your existing system
            const characterData = this.getCharacterData();
            
            const response = await fetch(`${this.apiUrl}/generate`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(characterData)
            });

            const result = await response.json();
            
            if (result.success) {
                alert(`Generation started! Prompt ID: ${result.prompt_id}\nCheck ComfyUI for progress.`);
            } else {
                alert('Error: ' + result.error);
            }

        } catch (error) {
            alert('Connection error: ' + error.message);
        } finally {
            this.isGenerating = false;
            this.updateButton('Generate Image');
        }
    }

    getCharacterData() {
        // Use your existing enhanced character data
        const data = window.RolaiCharacterCreator?.enhancedCharacterData || 
                     window.enhancedCharacterData || {};
        
        return {
            name: data.name || 'Character',
            gender: data.physicalCharacteristics?.gender || 'feminino',
            physical: data.physicalCharacteristics || {},
            occupation: data.occupation ? {name: data.occupation} : {},
            seed: Math.floor(Math.random() * 1000000),
            steps: 20,
            width: 768,
            height: 1024
        };
    }

    updateButton(text) {
        const btn = document.getElementById('generate-image-btn');
        if (btn) btn.textContent = text;
    }
}

// Initialize and add button
document.addEventListener('DOMContentLoaded', function() {
    window.comfyUIGenerator = new ComfyUIGenerator();
    
    // Add generate button to your interface
    const container = document.querySelector('.action-buttons') || 
                     document.querySelector('.tab-content');
    
    if (container) {
        const button = document.createElement('button');
        button.id = 'generate-image-btn';
        button.className = 'btn';
        button.textContent = 'Generate Image';
        button.onclick = () => window.comfyUIGenerator.generateImage();
        button.style.cssText = `
            margin-left: 10px;
            background: #ff6b6b;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
        `;
        
        container.appendChild(button);
    }
});