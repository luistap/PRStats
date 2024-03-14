# script to enhance scoreboard screenshots
# for training / validation use only

from PIL import Image, ImageEnhance
import os

def enhance_image(image_path):
    try:
        # Load the image
        image = Image.open(image_path)
        
        # Enhance brightness
        enhancer = ImageEnhance.Brightness(image)
        image = enhancer.enhance(1.5)  # Adjust this value as needed
        
        # Enhance saturation
        enhancer = ImageEnhance.Color(image)
        image = enhancer.enhance(1.5)  # Adjust this value as needed
        
        # Save the enhanced image, overwriting the original
        image.save(image_path)
        print(f"Enhanced image saved: {image_path}")
    except Exception as e:
        print(f"Error processing {image_path}: {e}")

def process_directory(directory_path):
    for filename in os.listdir(directory_path):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):  # Check for image files
            image_path = os.path.join(directory_path, filename)
            enhance_image(image_path)

# Specify the path to your screenshots
screenshots_path = r'C:\Users\ltper\OneDrive\Desktop\SCBRD'
process_directory(screenshots_path)
