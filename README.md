# Recovering and Enhancing Digital Facial Images

## Project Overview
This project focuses on recovering facial images using Generative Adversarial Networks (GANs). The primary goal is to reconstruct high-quality facial images from corrupted or low-resolution inputs using **StyleGAN**, a state-of-the-art architecture known for generating realistic images.

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/nimesh69/Recovering-and-Enhancing-Digital-Facial-Images-.git
cd GFPGAN
```

### 2. Create a Virtual Environment
```bash
conda create -n name python=3.9
conda activate name
```
 
 
### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

---

## Data

### Dataset
The project uses datasets such as **CelebA, FFHQ, Asian Faces**, and a custom dataset containing over 100,000 facial images with diverse attributes.

### Data Preparation

1. **Download the Dataset**  
   Download the dataset from [Kaggle](https://www.kaggle.com/datasets/aadish888/completephoto).

2. **Preprocess the Data**  
   Resize images as per your requirement:
   ```bash
   cd Essential files/Resize_image
   python resize.py
   ```

3. **Extract Faces from the Dataset (Multiple Faces)**  
   ```bash
   cd Essential files/Extract image to train
   python extract.py
   ```

---

## Training

### Training Process

#### Adjust Hyperparameters
Modify the configuration file as needed:  
`GFPGAN/options/train_gfpgan_v1_simple.yml`

#### Start Training
Run the following command:
```bash
BASICSR_JIT=True python train.py -opt train_gfpgan_v1_simple.yml
```

#### Customize Image Size
To train at a custom image size, modify the `utils.py` file as shown:  
<p align="center">
  <img src="https://i.postimg.cc/Jzj0PyfT/code.png">
</p>
<p align="center">
  <img src="https://i.postimg.cc/8P2sRd0J/code2.png">
</p>

---

## Testing

### Evaluation Metrics

#### 1. SSIM (Structural Similarity Index)
SSIM measures the perceptual similarity between two images.  
**Formula**:  
\[
SSIM(x, y) = \frac{(2\mu_x\mu_y + C_1)(2\sigma_{xy} + C_2)}{(\mu_x^2 + \mu_y^2 + C_1)(\sigma_x^2 + \sigma_y^2 + C_2)}
\]

#### 2. PSNR (Peak Signal-to-Noise Ratio)
PSNR quantifies the image quality by comparing the original and distorted images.  
**Formula**:  
\[
PSNR = 10 \cdot \log_{10} \left( \frac{MAX^2}{MSE} \right)
\]

### Generate Images
```bash
BASICSR_JIT=True python inference_gfpgan.py -i inputs/uploads -o results -v 1.7 -s 1 --bg_upsampler realesrgan
```
- Adjust the version number as needed.

---

## React App Integration

### Steps to Run the React App

1. Navigate to the React project directory:
   ```bash
   cd project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update API endpoint in `main.py` and `trynow.tsx` files:  
   <p align="center">
     <img src="https://i.postimg.cc/9fpMH6FZ/code3.png">
   </p>
   <p align="center">
     <img src="https://i.postimg.cc/yNBd51B7/code4.png">
   </p>
4. Specify the model:
   <a href='https://postimg.cc/cgK32fJq' target='_blank'><img src='https://i.postimg.cc/DZ6cWgkz/code.png' border='0' alt='code'/></a>
   ### 6.1 Adjust according to version number 
   <a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/43CPjyQX/code1.png" alt="code1"/></a>
5. To use 256*256 model(GFPGAN1.4.pth), you need to adjust the parameters  in `utils.py` just comment the 512 code and uncomment the 256
   <a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/26rw8ttJ/code3.png" alt="code3"/></a>
   <a href='https://postimages.org/' target='_blank'><img src='https://i.postimg.cc/nLv2xx3B/code4.png' border='0' alt='code4'/></a>

6. Start the development server:
   ```bash
   npm start dev
   ```

7. Run the API:
   ```bash
   BASICSR_JIT=True uvicorn main:app
   ```
### Interface Preview

- **Landing Page**  
  <p align="center">
    <img src="https://i.postimg.cc/c1jJWMZ9/Screenshot-2025-01-28-185119.png">
  </p>

- **Start Processing**  
<a href='https://postimg.cc/G421CSqx' target='_blank'><img src='https://i.postimg.cc/Bn5Z2rFk/Screenshot-2025-01-28-185254.png' border='0' alt='Screenshot-2025-01-28-185254'/></a>

- **Image Processing in Progress**  
  <p align="center">
    <img src="https://i.postimg.cc/rpQ8P5Q9/Screenshot-2025-01-28-191930.png">
  </p>

---

## Figures

### Sample Results
<p align="center">
  <img src="https://i.postimg.cc/YqWCCGCp/image-8.jpg">
</p>
<p align="center">
  <img src="https://i.postimg.cc/rpQ8P5Q9/Screenshot-2025-01-28-191930.png">
</p>

---

## Contributing
We welcome contributions!  
**Steps to Contribute:**
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit changes and submit a pull request.

--- 