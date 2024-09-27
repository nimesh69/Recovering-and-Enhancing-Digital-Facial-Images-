
import os
import glob
import re

def rename_images(directory, start_index):
    # Change the current working directory to the target directory
    os.chdir(directory)
    
    # Collect all image files with specified extensions
    image_extensions = ('*.jpg', '*.jpeg', '*.png', '*.bmp', '*.gif', '*.tiff')
    image_files = []
    
    for ext in image_extensions:
        image_files.extend(glob.glob(ext))
    
    # Function to extract numbers from filenames
    def extract_number(filename):
        match = re.search(r'(\d+)', filename)
        return int(match.group(0)) if match else float('inf')  # Use infinity for files without numbers
    
    # Sort the image files list by extracted numbers
    image_files.sort(key=lambda x: extract_number(os.path.basename(x)))

    # First pass: Rename files to temporary names
    for i, file in enumerate(image_files, start=start_index):
        # Get the file extension
        _, file_extension = os.path.splitext(file)
        
        # Define a temporary name to avoid overwriting
        temp_name = f"temp_{i}{file_extension}"
        
        # Rename the file to the temporary name
        os.rename(file, temp_name)
        print(f"Renamed: {file} to {temp_name}")
    
    # Second pass: Rename temporary files to final names
    temp_files = glob.glob("temp_*")

    for temp_file in temp_files:
        # Calculate the final name from the temporary name
        number_part = int(os.path.splitext(temp_file.split('_')[1])[0])
        final_name = f"{number_part}{os.path.splitext(temp_file)[1]}"
        
        # Rename to the final name
        os.rename(temp_file, final_name)
        print(f"Renamed: {temp_file} to {final_name}")

# Example usage
directory = r'/home/kusan/Recovering-and-Enhancing-Digital-Facial-Images-/GFPGAN/datasets/faces/validation/ffhq512'  # Replace with your image directory path
start_index = 40000  # Start numbering the files from 26
rename_images(directory, start_index)