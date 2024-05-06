from PIL import Image, ImageOps
import cv2
import numpy as np

def process_image(image_path):
    # Load the image
    image = Image.open(image_path)
    
    # Get dimensions of the image
    width, height = image.size
    
    # Crop the left half
    left = image.crop((0, 0, width // 2, height))
    
    # Crop the right half and then split it into top and bottom halves
    right = image.crop((width // 2, 0, width, height))
    top_right = right.crop((0, 0, right.width, right.height // 2))
    bottom_right = right.crop((0, right.height // 2, right.width, right.height))
    
    # Convert to grayscale and process each part
    def process_part(part):
        part = part.convert('L')  # Convert to grayscale
        part = ImageOps.invert(part)  # Invert colors
        part_np = np.array(part)  # Convert to numpy array for OpenCV processing
        part_np = cv2.equalizeHist(part_np)  # Equalize histogram for contrast enhancement
        return Image.fromarray(part_np)  # Convert back to PIL Image from numpy array
    
    left = process_part(left)
    top_right = process_part(top_right)
    bottom_right = process_part(bottom_right)
    
    # Save processed parts
    left.save('left_side.png')
    top_right.save('top_right_side.png')
    bottom_right.save('bottom_right_side.png')

    return 'left_side.png', 'top_right_side.png', 'bottom_right_side.png'
