# from PIL import Image, ImageFilter
# import numpy as np
# import os
# import random

# def add_poisson_noise(image):
#     np_image = np.array(image).astype(float)
#     vals = len(np.unique(np_image))
#     vals = 2 ** np.ceil(np.log2(vals))
#     noisy_image = np.random.poisson(np_image * vals) / float(vals)
#     noisy_image = np.clip(noisy_image, 0, 255).astype(np.uint8)
#     return Image.fromarray(noisy_image)

# def degrade_image(image_path, output_path):
#     print(f"Processing image: {image_path}")
#     image = Image.open(image_path)
#     # Apply Gaussian Blur
#     blurred_image = image.filter(ImageFilter.GaussianBlur(radius=20))
#     # Add Poisson Noise
#     noisy_image = add_poisson_noise(blurred_image)
#     noisy_image.save(output_path)
#     print(f"Saved degraded image to: {output_path}")

# input_folder = r'C:\Users\Dell\Downloads\ground_truths'
# output_folder = r'C:\Users\Dell\Downloads\input'
# os.makedirs(output_folder, exist_ok=True)

# if not os.listdir(input_folder):
#     print("No images found in reference folder.")

# for img_name in os.listdir(input_folder):
#     gt_image_path = os.path.join(input_folder, img_name)
#     input_image_path = os.path.join(output_folder, img_name)
#     degrade_image(gt_image_path, input_image_path)

# print("Degradation process completed.")

# # Verify the contents of the input folder
# input_files = os.listdir(output_folder)
# if not input_files:
#     print("No images found in input folder.")
# else:
#     print(f"Number of degraded images in input folder: {len(input_files)}")






import os
import cv2
import numpy as np
import random

def apply_gaussian_blur(image, kernel_size, sigma):
    """Apply Gaussian blur to the image."""
    return cv2.GaussianBlur(image, (kernel_size, kernel_size), sigma)

def apply_downsampling(image, scale_factor):
    """Downsample the image by a given scale factor."""
    height, width = image.shape[:2]
    new_size = (int(width / scale_factor), int(height / scale_factor))
    downsampled_image = cv2.resize(image, new_size, interpolation=cv2.INTER_LINEAR)
    return cv2.resize(downsampled_image, (width, height), interpolation=cv2.INTER_LINEAR)

def add_noise(image, noise_level):
    """Add Gaussian noise to the image."""
    noise = np.random.normal(0, noise_level, image.shape).astype(np.uint8)
    noisy_image = cv2.add(image, noise)
    return noisy_image

def apply_jpeg_compression(image, quality):
    """Apply JPEG compression to the image."""
    encode_param = [int(cv2.IMWRITE_JPEG_QUALITY), quality]
    _, encoded_image = cv2.imencode('.jpg', image, encode_param)
    decoded_image = cv2.imdecode(encoded_image, cv2.IMREAD_COLOR)
    return decoded_image

def apply_color_jitter(image, shift):
    """Apply color jitter by adjusting brightness, contrast, saturation, and hue."""
    image = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)
    h_shift = random.randint(-shift, shift)
    s_shift = random.randint(-shift, shift)
    v_shift = random.randint(-shift, shift)
    image[:, :, 0] = cv2.add(image[:, :, 0], h_shift)
    image[:, :, 1] = cv2.add(image[:, :, 1], s_shift)
    image[:, :, 2] = cv2.add(image[:, :, 2], v_shift)
    return cv2.cvtColor(image, cv2.COLOR_HSV2BGR)

def convert_to_grayscale(image):
    """Convert the image to grayscale."""
    return cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

def degrade_image(image_path, output_folder):
    """Degrade a single image with the specified transformations."""
    image = cv2.imread(image_path)

    # Apply blurring
    kernel_type = np.random.choice(['iso', 'aniso'], p=[0.5, 0.5])
    if kernel_type == 'iso':
        kernel_size = 41  # Fixed size for isotropic
    else:
        kernel_size = random.choice([41, 45, 49])  # Example alternative sizes for anisotropic
    blur_sigma = random.uniform(0.1, 10)
    image = apply_gaussian_blur(image, kernel_size, blur_sigma)

    # Apply downsampling
    scale_factor = random.uniform(0.8, 8)
    image = apply_downsampling(image, scale_factor)

    # Add noise
    noise_level = random.uniform(0, 20)
    image = add_noise(image, noise_level)

    # Apply JPEG compression
    jpeg_quality = random.randint(60, 100)
    image = apply_jpeg_compression(image, jpeg_quality)

    # Apply color jitter
    if random.random() < 0.3:
        color_jitter_shift = 20
        image = apply_color_jitter(image, color_jitter_shift)

    # Convert to grayscale
    if random.random() < 0.01:
        image = convert_to_grayscale(image)

    # Save degraded image
    filename = os.path.basename(image_path)
    output_path = os.path.join(output_folder, filename)
    cv2.imwrite(output_path, image)

def process_folder(input_folder, output_folder):
    """Process all images in the input folder and save degraded images to the output folder."""
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    for filename in os.listdir(input_folder):
        if filename.endswith(('.png', '.jpg', '.jpeg', '.bmp', '.tiff')):
            image_path = os.path.join(input_folder, filename)
            degrade_image(image_path, output_folder)
            print(f'Processed {filename}')

# Example usage
# input_folder = 'path/to/your/input/folder'  # Set the path to your input image folder
# output_folder = 'path/to/your/output/folder'  # Set the path to your output folder
input_folder = r'/home/kusan/Recovering-and-Enhancing-Digital-Facial-Images-/GFPGAN/datasets/faces/validation/ground_truth'
output_folder = r'/home/kusan/Recovering-and-Enhancing-Digital-Facial-Images-/GFPGAN/datasets/faces/validation/g'
process_folder(input_folder, output_folder)
