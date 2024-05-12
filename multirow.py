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

def process_stats(image_path):
    # Load the image
    img = cv2.imread(image_path)
    # Assuming img is already preprocessed (cropped to stats area, thresholded, etc.)

    # Height of each row
    row_height = img.shape[0] // 5

    # Create directory for cropped character images
    cropped_dir = 'chars_cropped'
    if not os.path.exists(cropped_dir):
        os.makedirs(cropped_dir)

    stats = []
    for i in range(5):  # Assuming 5 rows of players
        row_img = img[i*row_height:(i+1)*row_height, :]

        # Assuming there are 3 numbers per row and calculating the approximate width of each number
        char_width = row_img.shape[1] // 3

        row_stats = []  # Temporary list to hold stats for a single row
        for j in range(3):  # Assuming 3 characters per row
            # Crop the character more tightly
            # Adjust margins to zoom closer
            margin_w = int(0.1 * char_width)  # Adjust margin as needed
            margin_h = int(0.1 * row_height)  # Adjust margin as needed

            char_img = row_img[margin_h:-margin_h, (j*char_width+margin_w):((j+1)*char_width-margin_w)]

            # Save the cropped character image as PNG
            char_path = os.path.join(cropped_dir, f'row_{i+1}_char_{j+1}.png')
            cv2.imwrite(char_path, char_img)

            # Convert the character image to bytes for PNG
            _, buffer = cv2.imencode('.png', char_img)
            byte_img = io.BytesIO(buffer).getvalue()

            # Use the detect_text function to OCR the character
            char_text = detect_text(byte_img)
            row_stats.append(char_text)  # Add the text to the row's stats

        stats.append(row_stats)  # Add the completed row to the overall stats

    return stats

def convert_path(path):
    return path.replace("\\", "/")

# Example usage
path = r"C:\Users\ltper\PCKSTATS\Inverted_Image.png"
stats = process_stats(convert_path(path))
for row in stats:
    print(' '.join(row))
