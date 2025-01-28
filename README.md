# Recovering-and-Enhancing-Digital-Facial-Images-

## Project Overview
This project focuses on recovering facial images using Generative Adversarial Networks (GANs). The goal is to reconstruct high-quality facial images from corrupted or low-resolution inputs. The project utilizes **StyleGAN**, a state-of-the-art GAN architecture known for generating highly realistic images.


### Setup Instructions
1. **Clone the repository:**
   ```bash
   git clone https://github.com/nimesh69/Recovering-and-Enhancing-Digital-Facial-Images-.git
   cd GFPGAN
   ```
2. **Create a virtual environment:**
   ```bash
    conda create -n name python=3.9
    conda activate name
   ```
3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

## Data

### Dataset
This project uses the **CelebA, FFHQ, Asian Faces, our own custom dataset** dataset, which contains over 100,000 facial images with various attributes. The dataset provides high-resolution face images with diverse appearances.

### Data Preparation
1. **Download the dataset:**
   - Download from the Kaggle (https://www.kaggle.com/datasets/aadish888/completephoto).
2. **Preprocess the data:**
   ```python
   cd Essential files/Resize_image
   python resize.py
   ```
   - Resizing according to your requirement.
3. **Extract face from the dataset(multiple face):**
    ```python
   cd Essential files\Extract image to train
   python extract.py
   ```
## Training

### Training Process
- **Hyperparameters:**
    - Adjust config file according to your need.
        - GFPGAN\options\train_gfpgan_v1_simple.yml
### Training Instructions
To start training the model, run the following command:
```bash
BASICSR_JIT=True python train.py -opt train_gfpgan_v1_simple.yml
```
if you want to train the model at custom size then following changes should be done in the code(utils.py) 
<p align="center">
  <img src="https://i.postimg.cc/Jzj0PyfT/code.png">
</p>
<p align="center">
  <img src="https://i.postimg.cc/8P2sRd0J/code2.png">
</p>
## Testing

### Evaluation Metrics
The model is evaluated using the following metrics:

### **1. SSIM (Structural Similarity Index)**
The **SSIM index** is a perceptual metric that measures the similarity between two images. It is designed to model the human visual system and quantify image quality degradation based on perceived structural information.

#### Key Features of SSIM:
- **Structural comparison**: SSIM evaluates changes in structural information, which is key to how humans perceive images.
- **Components**: It considers three components: **luminance (brightness), contrast**, and **structure**.
- **Range**: The SSIM value ranges from **-1 to 1**:
  - **1** indicates the two images are identical.
  - **0 or negative** values indicate significant dissimilarity.
- **Calculation**:
  SSIM is typically calculated using a sliding window over the image. The formula involves comparing the mean, variance, and covariance of the pixel intensities in corresponding windows.

  **SSIM formula**:
  \[
  SSIM(x, y) = \frac{(2\mu_x\mu_y + C_1)(2\sigma_{xy} + C_2)}{(\mu_x^2 + \mu_y^2 + C_1)(\sigma_x^2 + \sigma_y^2 + C_2)}
  \]
  - \( \mu_x, \mu_y \): Mean pixel intensities of images \(x\) and \(y\).
  - \( \sigma_x^2, \sigma_y^2 \): Variances of \(x\) and \(y\).
  - \( \sigma_{xy} \): Covariance between \(x\) and \(y\).
  - \( C_1, C_2 \): Small constants to stabilize the division.

---

### **2. PSNR (Peak Signal-to-Noise Ratio)**
The **PSNR** measures the ratio between the maximum possible pixel value and the noise or distortion in an image. It quantifies image quality in terms of signal fidelity.

#### Key Features of PSNR:
- **Pixel-wise comparison**: PSNR is based on the pixel differences (mean squared error, MSE) between the original and distorted images.
- **Mathematical simplicity**: It assumes that smaller errors correspond to better quality.
- **Range**: PSNR is measured in **decibels (dB)**:
  - Higher PSNR values indicate better quality (less distortion).
  - Typical values for good-quality images: 30–50 dB.
  - Lower than 20 dB indicates severe degradation.
- **Calculation**:
  \[
  PSNR = 10 \cdot \log_{10} \left( \frac{MAX^2}{MSE} \right)
  \]
  - \( MAX \): Maximum possible pixel value (e.g., 255 for 8-bit images).
  - \( MSE \): Mean Squared Error between the original and distorted image:
    \[
    MSE = \frac{1}{N} \sum_{i=1}^N (x_i - y_i)^2
    \]
    where \(x_i\) and \(y_i\) are pixel values in the original and distorted images.

### Generating Images
To generate images from the trained model:
```bash
!BASICSR_JIT=True python inference_gfpgan.py -i inputs/uploads -o results -v 1.7 -s 1 --bg_upsampler realesrgan
```
- adjust version number

## React App Integration


### Running the React App
1. Navigate to the `react-app` directory:
   ```bash
   cd project
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start dev
   ```
4. Run the API 
   ```bash
   python main.py
   ```
5. Adjust the end point for the API on main,py and trynow.tsx files
   <p align="center">
  <img src="https://i.postimg.cc/9fpMH6FZ/code3.png">
</p>
   <p align="center">
  <img src="https://i.postimg.cc/yNBd51B7/code4.png">
</p>

After starting the server you will see the following interface
<p align="center">
  <img src="https://i.postimg.cc/c1jJWMZ9/Screenshot-2025-01-28-185119.png">
</p>
click on Try now button to get started
<p align="center">
  <img src="https://i.postimg.cc/Bn5Z2rFk/Screenshot-2025-01-28-185254.png">
</p>
upload the images and processing will start
<p align="center">
  <img src="https://i.postimg.cc/rpQ8P5Q9/Screenshot-2025-01-28-191930.png">
</p>

## Figures
<p align="center">
  <img src="https://i.postimg.cc/YqWCCGCp/image-8.jpg">
</p>
<p align="center">
  <img src="https://i.postimg.cc/rpQ8P5Q9/Screenshot-2025-01-28-191930.png">
</p>

## Contributing
We welcome contributions to improve the project. Please follow these guidelines:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and submit a pull request.

