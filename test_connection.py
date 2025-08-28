import requests

# Test if ComfyUI is responding
try:
    response = requests.get("http://localhost:8188/system_stats")
    print("ComfyUI is running:", response.status_code == 200)
    print("Response:", response.text[:100])
except:
    print("ComfyUI is not accessible")