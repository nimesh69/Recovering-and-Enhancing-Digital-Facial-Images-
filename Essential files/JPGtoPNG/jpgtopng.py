from PIL import Image
import os

def convert_images_to_png(input_directory, output_directory):
    # Create the output directory if it does not exist
    os.makedirs(output_directory, exist_ok=True)
    
    # Iterate over all files in the input directory
    for filename in os.listdir(input_directory):
        input_path = os.path.join(input_directory, filename)
        if os.path.isfile(input_path):
            try:
                # Open the image file
                with Image.open(input_path) as img:
                    # Prepare output path
                    base_name, _ = os.path.splitext(filename)
                    output_path = os.path.join(output_directory, f"{base_name}.png")
                    
                    # Convert image to PNG
                    img.save(output_path, format='PNG')
                    print(f"Converted {filename} to {output_path}")
            except Exception as e:
                print(f"An error occurred with {filename}: {e}")

if __name__ == "__main__":
    input_directory = r'/home/kusan/Recovering-and-Enhancing-Digital-Facial-Images-/GFPGAN/datasets/faces/validation/image'  # Replace with your input directory
    output_directory = r'/home/kusan/Recovering-and-Enhancing-Digital-Facial-Images-/GFPGAN/datasets/faces/validation/images'  # Replace with your output directory
    convert_images_to_png(input_directory, output_directory)
