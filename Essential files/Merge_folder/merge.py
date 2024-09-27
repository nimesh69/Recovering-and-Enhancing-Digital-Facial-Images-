import os
import shutil

def merge_folders(source_folder1, source_folder2, destination_folder):
    # Create the destination folder if it does not exist
    if not os.path.exists(destination_folder):
        os.makedirs(destination_folder)

    # Function to copy files from a source folder to the destination folder
    def copy_files(source_folder):
        for root, _, files in os.walk(source_folder):
            for file in files:
                src_path = os.path.join(root, file)
                dst_path = os.path.join(destination_folder, file)

                # Skip the file if it already exists in the destination
                if os.path.exists(dst_path):
                    print(f"Skipping existing file: {dst_path}")
                    continue

                # Copy the file to the destination folder
                shutil.copy2(src_path, dst_path)
                print(f"Copied: {src_path} to {dst_path}")

    # Copy files from both source folders
    copy_files(source_folder1)
    copy_files(source_folder2)

# Paths to the source folders and destination folder
source_folder1 = r'/home/kusan/Recovering-and-Enhancing-Digital-Facial-Images-/GFPGAN/datasets/faces/validation/train_img'
source_folder2 = r'/home/kusan/Recovering-and-Enhancing-Digital-Facial-Images-/GFPGAN/datasets/faces/validation/ffhq512'
destination_folder = r'/home/kusan/Recovering-and-Enhancing-Digital-Facial-Images-/GFPGAN/datasets/faces/validation/ffhq512'

# Merge folders
merge_folders(source_folder1, source_folder2, destination_folder)

print("Folders merged successfully.")

