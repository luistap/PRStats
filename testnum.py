import cv2
import io
import os
import torch
import torchvision.transforms as transforms
from PIL import Image  # Importing PIL
from model import SimpleCNN
import utilities

def load_model(model_path):
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    model = SimpleCNN().to(device)
    model.load_state_dict(torch.load(model_path, map_location=device))
    model.eval()
    return model, device

def preprocess_image(image_path):
    transform = transforms.Compose([
        transforms.Grayscale(),  # Convert to grayscale
        transforms.Resize((28, 28)),  # Resize to 28x28 pixels
        transforms.ToTensor(),  # Convert to tensor
        transforms.Normalize((0.5,), (0.5,))  # Normalize the tensor
    ])

    image = Image.open(image_path)
    image = transform(image)
    image = image.unsqueeze(0)  # Add batch dimension
    return image

def predict(model, device, image):
    image = image.to(device)
    with torch.no_grad():
        output = model(image)
        _, predicted = torch.max(output, 1)
        predicted_class = predicted.item()
        return predicted_class

def main():
    # Hardcoded paths
    model_path = 'C:/Users/ltper/OneDrive/Desktop/cnn/models'
    image_path = r"C:\Users\ltper\OneDrive\Desktop\cnn\val\9\idk.png".replace('\\', '/')
    
    # Load the model
    model, device = load_model(model_path)
    
    # Preprocess the image
    image = preprocess_image(image_path)
    
    # Get the prediction
    predicted_class = predict(model, device, image)
    
    # Interpret the prediction
    if predicted_class == 0:
        print("The predicted number is 6.")
    elif predicted_class == 1:
        print("The predicted number is 9.")
    else:
        print("Unknown prediction.")

if __name__ == "__main__":
    main()
