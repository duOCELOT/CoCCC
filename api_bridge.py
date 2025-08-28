from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import json
import time

app = Flask(__name__)
CORS(app)

COMFYUI_URL = "http://127.0.0.1:8188"

def create_workflow_from_your_setup(character_data):
    """Simplified workflow using your key nodes"""
    
    workflow = {
        "501": {  # Portuguese Bridge Node
            "inputs": {
                "portuguese_character_data": json.dumps(character_data),
                "force_gender": "",
                "force_occupation": "",
                "add_prosthetics": False,
                "add_battle_damage": True,
                "translate_name": False
            },
            "class_type": "DuoColotPortugueseBridgeNode"
        },
        "503": {  # Character Constructor Node
            "inputs": {
                "frontend_data": ["501", 0],
                "randomize_empty": True,
                "custom_prompt": ""
            },
            "class_type": "DuoColotCharacterConstructorNode"
        },
        "439": {  # CLIP Loader
            "inputs": {
                "clip_name1": "t5-v1_1-xxl-encoder-Q3_K_S.gguf",
                "clip_name2": "clip_l.safetensors",
                "type": "flux"
            },
            "class_type": "DualCLIPLoaderGGUF"
        },
        "437": {  # UNET Loader
            "inputs": {
                "unet_name": "flux1-dev-Q3_K_S.gguf"
            },
            "class_type": "UnetLoaderGGUF"
        },
        "6": {  # CLIP Text Encode Positive
            "inputs": {
                "clip": ["439", 0],
                "text": ["503", 0]
            },
            "class_type": "CLIPTextEncode"
        },
        "42": {  # CLIP Text Encode Negative
            "inputs": {
                "clip": ["439", 0],
                "text": "low quality, blurry, distorted"
            },
            "class_type": "CLIPTextEncode"
        },
        "27": {  # Empty Latent
            "inputs": {
                "width": character_data.get("width", 768),
                "height": character_data.get("height", 1024),
                "batch_size": 1
            },
            "class_type": "EmptySD3LatentImage"
        },
        "25": {  # Random Noise
            "inputs": {
                "noise_seed": character_data.get("seed", int(time.time())),
                "control_after_generate": "randomize"
            },
            "class_type": "RandomNoise"
        },
        "16": {  # KSampler Select
            "inputs": {
                "sampler_name": "dpmpp_2m"
            },
            "class_type": "KSamplerSelect"
        },
        "17": {  # Basic Scheduler  
            "inputs": {
                "model": ["437", 0],
                "scheduler": "beta",
                "steps": character_data.get("steps", 20),
                "denoise": 1.0
            },
            "class_type": "BasicScheduler"
        },
        "22": {  # Basic Guider
            "inputs": {
                "model": ["437", 0],
                "conditioning": ["6", 0]
            },
            "class_type": "BasicGuider"
        },
        "73": {  # Sampler Custom Advanced
            "inputs": {
                "noise": ["25", 0],
                "guider": ["22", 0],
                "sampler": ["16", 0],
                "sigmas": ["17", 0],
                "latent_image": ["27", 0]
            },
            "class_type": "SamplerCustomAdvanced"
        },
        "10": {  # VAE Loader
            "inputs": {
                "vae_name": "FLUX_ae.safetensors"
            },
            "class_type": "VAELoader"
        },
        "65": {  # VAE Decode
            "inputs": {
                "samples": ["73", 1],
                "vae": ["10", 0]
            },
            "class_type": "VAEDecode"
        },
        "434": {  # Save Image - simplified
            "inputs": {
                "images": ["65", 0],
                "filename_prefix": f"character_{int(time.time())}"
            },
            "class_type": "SaveImage"
        }
    }
    
    return workflow

@app.route('/generate', methods=['POST'])
def generate_character():
    try:
        character_data = request.json
        print("Received character data:", character_data)
        
        workflow = create_workflow_from_your_setup(character_data)
        
        prompt_data = {"prompt": workflow}
        response = requests.post(f"{COMFYUI_URL}/prompt", json=prompt_data)
        
        if response.status_code == 200:
            result = response.json()
            return jsonify({
                "success": True,
                "prompt_id": result.get("prompt_id"),
                "message": "Generation started successfully"
            })
        else:
            return jsonify({
                "success": False,
                "error": f"ComfyUI error: {response.text}"
            })
        
    except Exception as e:
        print("Error:", str(e))
        return jsonify({"success": False, "error": str(e)})

@app.route('/test')
def test():
    return jsonify({"status": "API bridge ready"})

if __name__ == '__main__':
    print("Starting simplified API bridge")
    app.run(host='127.0.0.1', port=5000, debug=True)