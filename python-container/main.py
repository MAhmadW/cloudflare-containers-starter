import os

from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def get_root():
    return "Hello container!"

@app.get('/container')
def get_container():
    return {
        'country': os.getenv('CLOUDFLARE_COUNTRY_A2'),
        'deployment': os.getenv('CLOUDFLARE_DEPLOYMENT_ID'),
        'location': os.getenv('CLOUDFLARE_LOCATION'),
        'node': os.getenv('CLOUDFLARE_NODE_ID'),
        'placement': os.getenv('CLOUDFLARE_PLACEMENT_ID'),
        'region': os.getenv('CLOUDFLARE_REGION')
    }