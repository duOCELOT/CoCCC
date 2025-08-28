import requests
import json

test_character = {
    "name": "Maria Santos", 
    "gender": "feminino"
}

response = requests.post("http://localhost:5000/generate", json=test_character)
print("Status:", response.status_code)
print("Response:", response.json())