import cv2
import io
import os
from google.cloud import vision

# Set up Google Vision API client
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'packrunners.json'
client = vision.ImageAnnotatorClient()

def detect_text(byte_content):
    """Use Google Vision API for OCR."""
    image = vision.Image(content=byte_content)
    response = client.text_detection(image=image)
    texts = response.text_annotations
    return texts[0].description if texts else "No text found"

def apply_bilateral_filter(image):
    """
    Apply bilateral filtering to reduce noise while preserving edges.

    Args:
    image (numpy.ndarray): Input image array.

    Returns:
    numpy.ndarray: Bilaterally filtered image.
    """
    # Apply bilateral filter, adjust d, sigmaColor, and sigmaSpace as needed
    filtered_image = cv2.bilateralFilter(image, d=9, sigmaColor=75, sigmaSpace=75)
    return filtered_image


def process_stats(image_path):
    img = cv2.imread(image_path)
    row_height = img.shape[0] // 5
    cropped_dir = 'chars_cropped'
    if not os.path.exists(cropped_dir):
        os.makedirs(cropped_dir)

    stats = []
    for i in range(5):  # Assuming 5 rows of players
        row_img = img[i*row_height:(i+1)*row_height, :]
        char_width = row_img.shape[1] // 3

        row_stats = []
        for j in range(3):  # Assuming 3 characters per row
            margin_w = int(0.1 * char_width)
            margin_h = int(0.1 * row_height)
            char_img = row_img[margin_h:-margin_h, (j*char_width+margin_w):((j+1)*char_width-margin_w)]

            # Apply bilateral filtering to the cropped character image
            char_img_filtered = apply_bilateral_filter(char_img)

            # Save the filtered cropped character image as PNG
            char_path = os.path.join(cropped_dir, f'row_{i+1}_char_{j+1}.png')
            cv2.imwrite(char_path, char_img_filtered)

            # Convert the filtered character image to bytes for PNG
            _, buffer = cv2.imencode('.png', char_img_filtered)
            byte_img = io.BytesIO(buffer).getvalue()

            # Use the detect_text function to OCR the character
            char_text = detect_text(byte_img)
            row_stats.append(char_text)

        stats.append(row_stats)
    return stats

def convert_path(path):
    return path.replace("\\", "/")

# Example usage
path = r"C:\Users\ltper\PCKSTATS\processed_image.png"
stats = process_stats(convert_path(path))
for row in stats:
    print(' '.join(row))
