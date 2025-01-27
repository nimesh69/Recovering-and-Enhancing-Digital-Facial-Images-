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
python train.py --dataset /path/to/processed_data --epochs 100 --batch_size 32 --lr 0.0002
```

## Testing

### Evaluation Metrics
The model is evaluated using the following metrics:
- **Frechet Inception Distance (FID)**: Measures similarity between real and generated images.
- **Inception Score (IS)**: Evaluates image quality and diversity.

### Generating Images
To generate images from the trained model:
```bash
python generate.py --model_path /path/to/trained_model.pth --input_image /path/to/input.jpg --output_image /path/to/output.jpg
```

## Retraining
To retrain the model with new data or hyperparameters:
```bash
python train.py --dataset /path/to/new_data --epochs 200 --batch_size 64 --lr 0.0001
```
Modify the hyperparameters in `config.py` as needed.

## React App Integration

### Interaction with Model
The React app allows users to upload an image and receive a recovered facial image from the trained GAN model via an API.

### Functionalities
- Image upload and preview
- Submit for processing
- View results side-by-side with the input

### Running the React App
1. Navigate to the `react-app` directory:
   ```bash
   cd react-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Figures
Include relevant figures to demonstrate the model's performance:
- Training loss curves
- Generated images compared to ground truth
- FID score evolution over epochs

## Contributing
We welcome contributions to improve the project. Please follow these guidelines:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and submit a pull request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

