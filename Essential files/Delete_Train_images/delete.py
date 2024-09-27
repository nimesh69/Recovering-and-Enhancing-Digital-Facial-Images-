import os
import glob

def delete_images_in_directory(directory):
    # Define image file extensions to delete
    image_extensions = ('*.png', '*.jpg', '*.jpeg', '*.gif', '*.bmp', '*.tiff', '*.webp')
    
    # Recursively find all image files in the directory and its subdirectories
    for extension in image_extensions:
        for file_path in glob.glob(os.path.join(directory, '**', extension), recursive=True):
            try:
                os.remove(file_path)
                print(f"Deleted: {file_path}")
            except Exception as e:
                print(f"Error deleting {file_path}: {e}")

# Specify the directory to clean up
directory_to_clean = '/home/kusan/Recovering-and-Enhancing-Digital-Facial-Images-/GFPGAN/experiments/train_GFPGANv1_512_simple/visualization'

delete_images_in_directory(directory_to_clean)
