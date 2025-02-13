import os
import torch
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.responses import FileResponse
import cv2
import numpy as np
from datetime import datetime
import uvicorn
from typing import Optional
import shutil
from pathlib import Path
import requests
import warnings
# Import your existing GFPGAN setup
from gfpgan import GFPGANer
from basicsr.archs.rrdbnet_arch import RRDBNet
from realesrgan.archs.srvgg_arch import SRVGGNetCompact
from realesrgan import RealESRGANer
from fastapi.middleware.cors import CORSMiddleware
# Filter out the FutureWarning about weights_only
warnings.filterwarnings('ignore', category=FutureWarning)
app = FastAPI(
    title="Image Enhancement API",
    description="API for enhancing images using GFPGAN",
    version="1.0.0"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Update with your React app's URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Model URLs
MODEL_URLS = {
    'realesr-general-x4v3.pth': "https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.5.0/realesr-general-x4v3.pth",
    # 'GFPGANv1.0.pth': "https://github.com/TencentARC/GFPGAN/releases/download/v1.3.0/GFPGANv1.4.pth",
    # 'GFPGANv1.1.pth': "https://github.com/nimesh69/Recovering-and-Enhancing-Digital-Facial-Images-/releases/download/v1.0/asianface.10k.pth",
    # 'GFPGANv1.2.pth': "https://github.com/nimesh69/Recovering-and-Enhancing-Digital-Facial-Images-/releases/download/v2.0/asian.10k.+celebx.30k.pth",
    # 'GFPGANv1.3.pth': "https://github.com/nimesh69/Recovering-and-Enhancing-Digital-Facial-Images-/releases/download/v3.0/asian+celebx+ffhq.pth",
    # 'GFPGANv1.4.pth': "https://github.com/nimesh69/Recovering-and-Enhancing-Digital-Facial-Images-/releases/download/v4.0/aisan+ffhq+celebx.256.pth",
    'GFPGANv1.5.pth': "https://github.com/nimesh69/Recovering-and-Enhancing-Digital-Facial-Images-/releases/download/v5.0/net_g_latest.pth",

}

def download_weights(url: str, save_path: Path) -> None:
    """Download model weights if they don't exist."""
    if not save_path.exists():
        print(f"Downloading weights to {save_path}...")
        response = requests.get(url, stream=True)
        response.raise_for_status()
        
        with open(save_path, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        print(f"Download completed: {save_path}")

def ensure_weights_exist():
    """Ensure all required model weights are downloaded."""
    weights_dir = Path("weights")
    weights_dir.mkdir(exist_ok=True)
    
    for filename, url in MODEL_URLS.items():
        weight_path = weights_dir / filename
        if not weight_path.exists():
            download_weights(url, weight_path)

def initialize_models():
    """Initialize GFPGAN and RealESRGAN models."""
    # Ensure weights are downloaded
    ensure_weights_exist()
    
    # Get absolute paths for model weights
    weights_dir = Path("weights").absolute()
    realesrgan_path = str(weights_dir / "realesr-general-x4v3.pth")
    gfpgan_path = str(weights_dir / "GFPGANv1.5.pth")
    
    try:
        # Initialize RealESRGAN with the correct architecture
        model = SRVGGNetCompact(num_in_ch=3, num_out_ch=3, num_feat=64, num_conv=32, upscale=4, act_type='prelu')
        
        # Initialize RealESRGAN upsampler
        realesrganer = RealESRGANer(
            scale=4,
            model_path=realesrgan_path,
            model=model,
            tile=0,
            tile_pad=10,
            pre_pad=0,
            half=True
        )
        
        # GFPGAN model setup
        face_enhancer = GFPGANer(
            model_path=gfpgan_path,
            upscale=1,
            arch='original',
            channel_multiplier=1,
            bg_upsampler=realesrganer
        )
        
        return face_enhancer
    
    except Exception as e:
        print(f"Error during model initialization: {str(e)}")
        raise

# Create necessary directories
UPLOAD_DIR = Path("uploaded_images")
OUTPUT_DIR = Path("enhanced_images")
UPLOAD_DIR.mkdir(exist_ok=True)
OUTPUT_DIR.mkdir(exist_ok=True)

# Initialize models at startup with better error handling
try:
    face_enhancer = initialize_models()
    print("Models initialized successfully!")
except Exception as e:
    print(f"Error initializing models: {str(e)}")
    raise

@app.post("/enhance")
async def enhance_image(
    file: UploadFile = File(...),
    enhance_factor: Optional[int] = 2
):
    """
    Upload an image for enhancement.
    Returns the enhanced image.
    """
    try:
        # Validate file type
        if not file.content_type.startswith("image/"):
            raise HTTPException(status_code=400, detail="File must be an image")
        
        # Create unique filename
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        input_filename = f"input_{timestamp}{Path(file.filename).suffix}"
        output_filename = f"output_{timestamp}.png"
        
        input_path = UPLOAD_DIR / input_filename
        output_path = OUTPUT_DIR / output_filename
        
        # Save uploaded file
        with open(input_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        
        # Read and process image
        img = cv2.imread(str(input_path), cv2.IMREAD_COLOR)
        if img is None:
            raise HTTPException(status_code=400, detail="Could not read image file")
        
        # Enhance image with GFPGAN
        _, _, enhanced_img = face_enhancer.enhance(
            img,
            has_aligned=False,
            only_center_face=False,
            paste_back=True
        )
        
        # Save enhanced image
        cv2.imwrite(str(output_path), enhanced_img)
        
        # Return enhanced image
        return FileResponse(
            output_path,
            media_type="image/png",
            filename=output_filename
        )
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
    finally:
        # Clean up uploaded file
        if input_path.exists():
            input_path.unlink()

@app.get("/health")
async def health_check():
    """
    Simple health check endpoint
    """
    return {
        "status": "healthy",
        "model_loaded": face_enhancer is not None,
        "weights_dir_exists": Path("weights").exists(),
        "weights_files": [f.name for f in Path("weights").glob("*.pth")] if Path("weights").exists() else []
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)