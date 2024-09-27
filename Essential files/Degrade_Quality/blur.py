from PIL import Image, ImageFilter
import numpy as np
import os
import random

def add_poisson_noise(image):
    np_image = np.array(image).astype(float)
    vals = len(np.unique(np_image))
    vals = 2 ** np.ceil(np.log2(vals))
    noisy_image = np.random.poisson(np_image * vals) / float(vals)
    noisy_image = np.clip(noisy_image, 0, 255).astype(np.uint8)
    return Image.fromarray(noisy_image)

def degrade_image(image_path, output_path):
    print(f"Processing image: {image_path}")
    image = Image.open(image_path)
    # Apply Gaussian Blur
    blurred_image = image.filter(ImageFilter.GaussianBlur(radius=5))
    # Add Poisson Noise
    noisy_image = add_poisson_noise(blurred_image)
    noisy_image.save(output_path)
    print(f"Saved degraded image to: {output_path}")

input_folder = r'/home/kusan/Recovering-and-Enhancing-Digital-Facial-Images-/GFPGAN/datasets/faces/validation/ground_truth'
output_folder = r'/home/kusan/Recovering-and-Enhancing-Digital-Facial-Images-/GFPGAN/datasets/faces/validation/inputs'
os.makedirs(output_folder, exist_ok=True)

if not os.listdir(input_folder):
    print("No images found in reference folder.")

for img_name in os.listdir(input_folder):
    gt_image_path = os.path.join(input_folder, img_name)
    input_image_path = os.path.join(output_folder, img_name)
    degrade_image(gt_image_path, input_image_path)

print("Degradation process completed.")

# Verify the contents of the input folder
input_files = os.listdir(output_folder)
if not input_files:
    print("No images found in input folder.")
else:
    print(f"Number of degraded images in input folder: {len(input_files)}")

