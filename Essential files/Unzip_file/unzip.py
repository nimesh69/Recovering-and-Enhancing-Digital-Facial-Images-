import zipfile
import os

#Define the path to the zip file and the destination directory
zip_file_path = "/home/kusan/AI,ML and DL.zip"
destination_dir = "/home/kusan/AI_ML_DL"

#Create the destination directory if it does not exist
os.makedirs(destination_dir, exist_ok=True)

#Unzip the file
with zipfile.ZipFile(zip_file_path, 'r') as zip_ref:
    zip_ref.extractall(destination_dir)

#List the files in the destination directory to verify extraction
extracted_files = os.listdir(destination_dir)
extracted_files