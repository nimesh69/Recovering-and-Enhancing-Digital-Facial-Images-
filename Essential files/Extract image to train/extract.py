import shutil
import cv2
import ipyplot
import matplotlib.pyplot as plt
import glob
import time
import sys
import urllib
import os
import torch
import numpy as np
from facexlib.utils.face_restoration_helper import FaceRestoreHelper
class FaceCropper:
    """Helper class for detecting and cropping faces from images."""

    def __init__(self, upscale=1, device=None):
        self.upscale = upscale
        self.device = torch.device('cuda' if torch.cuda.is_available() else 'cpu') if device is None else device
        
        # Initialize FaceRestoreHelper, but we will only use it for face detection and cropping
        self.face_helper = FaceRestoreHelper(
            upscale,
            face_size=512,
            crop_ratio=(1, 1),
            det_model='retinaface_resnet50',  # Face detection model
            save_ext='png',
            use_parse=False,  # No need for parsing
            device=self.device,
            model_rootpath='gfpgan/weights'  # Directory to save/load model weights
        )

    def detect_and_crop_faces(self, img, only_center_face=False):
        """Detect and crop faces from the given image.

        Args:
            img (numpy.ndarray): Input image in BGR format.
            only_center_face (bool): If True, only the center face will be detected and cropped.

        Returns:
            cropped_faces (list): List of cropped face images.
        """
        self.face_helper.clean_all()
        
        # Read image and detect faces
        self.face_helper.read_image(img)
        self.face_helper.get_face_landmarks_5(only_center_face=only_center_face, eye_dist_threshold=5)

        # Align and crop each detected face
        self.face_helper.align_warp_face()

        return self.face_helper.cropped_faces

def process_images_in_folder(folder_path, output_dir='face'):
    # Initialize the FaceCropper
    face_cropper = FaceCropper(upscale=1)
    
    # Create the output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)

    # Initialize a counter for the cropped face filenames
    face_counter = 1

    # Iterate over all files in the folder
    for filename in os.listdir(folder_path):
        file_path = os.path.join(folder_path, filename)
        
        # Check if the file is an image (you can extend this check as needed)
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp')):
            # Load the image
            img = cv2.imread(file_path)
            
            # Detect and crop faces
            cropped_faces = face_cropper.detect_and_crop_faces(img, only_center_face=False)

            # Save the cropped faces with unique filenames
            for face in cropped_faces:
                output_file_path = os.path.join(output_dir, f'cropped_face_{face_counter}.png')
                cv2.imwrite(output_file_path, face)
                face_counter += 1

    print(f"Processed {face_counter - 1} cropped faces saved in the '{output_dir}' folder.")

# Example usage:
# Set the folder path containing input images
input_folder_path = r'/kaggle/input/d/nimesh69/extract-faces/Photo - Copy'

# Process the images in the folder
process_images_in_folder(input_folder_path)