# from PIL import Image
# import os

# input_dir = r'/home/kusan/Recovering-and-Enhancing-Digital-Facial-Images-/GFPGAN/datasets/faces/validation/input'
# output_dir = r'/home/kusan/Recovering-and-Enhancing-Digital-Facial-Images-/GFPGAN/datasets/faces/validation/inputs'

# # Create the output directory if it doesn't exist
# if not os.path.exists(output_dir):
#     os.makedirs(output_dir)
# total_img=len(os.listdir(input_dir))
# # Iterate over all files in the input directory
# for num, filename in enumerate(os.listdir(input_dir), 1):
#     if filename.endswith(('.jpg', '.jpeg', '.png', '.bmp', '.tiff')):
#         try:
#             # Open an image file
#             with Image.open(os.path.join(input_dir, filename)) as img:
#                 # Resize image
#                 img_resized = img.resize((512, 512))
#                 # Save it back to the output directory
#                 img_resized.save(os.path.join(output_dir, filename))
#                 print(f"Resized and saved {num}/{total_img}: {filename}")
#         except Exception as e:
#             print(f"Failed to process {filename}: {e}")


import os
from PIL import Image
import torch
import torchvision.transforms as transforms

input_dir = r'/home/kusan/Recovering-and-Enhancing-Digital-Facial-Images-/GFPGAN/datasets/faces/validation/ground_truth'
output_dir = r'/home/kusan/Recovering-and-Enhancing-Digital-Facial-Images-/GFPGAN/datasets/faces/validation/ground_truths'

# Create the output directory if it doesn't exist
os.makedirs(output_dir, exist_ok=True)

# Define the transformation: resize to (512, 512)
transform = transforms.Compose([
    transforms.Resize((256, 256)),
    transforms.ToTensor()  # Convert image to PyTorch tensor
])

# Parameters
batch_size = 30  # Adjust this according to your GPU memory capacity
image_tensors = []

# Iterate over all files in the input directory
total_img = len(os.listdir(input_dir))
for num, filename in enumerate(os.listdir(input_dir), 1):
    if filename.lower().endswith(('.jpg', '.jpeg', '.png', '.bmp', '.tiff')):
        try:
            # Open an image file
            with Image.open(os.path.join(input_dir, filename)) as img:
                # Apply transformations
                img_tensor = transform(img)
                image_tensors.append(img_tensor)
                
                # Process batch if batch_size is reached
                if len(image_tensors) == batch_size or num == total_img:
                    # Convert list to tensor and move to GPU
                    batch_tensor = torch.stack(image_tensors).cuda()
                    
                    # Convert tensors back to PIL images and save them
                    for i, img_tensor in enumerate(batch_tensor):
                        img_resized = transforms.ToPILImage()(img_tensor.cpu())
                        save_filename = os.path.join(output_dir, os.listdir(input_dir)[num - batch_size + i])
                        img_resized.save(save_filename)
                    
                    print(f"Processed batch {num//batch_size + 1}: {filename}")
                    
                    # Clear the batch list
                    image_tensors = []
        except Exception as e:
            print(f"Failed to process {filename}: {e}")
