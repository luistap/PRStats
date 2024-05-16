import cloudinary
import cloudinary.uploader
import cloudinary.api
import requests
import os
from google.cloud import vision

# Configure your Cloudinary credentials
cloudinary.config(
    cloud_name="degzpxhjw",  # Your cloud name
    api_key="396329727495689",  # Your API key
    api_secret="iMxbks6PueFT0oa8nUd1NOR7ARo"  # Your API secret
)

# Set up Google Vision API client
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'packrunners.json'
client = vision.ImageAnnotatorClient()

def detect_text_path(image_path):
    """Use Google Vision API for OCR."""
    with open(image_path, "rb") as image_file:
        content = image_file.read()
    image = vision.Image(content=content)
    response = client.text_detection(image=image)
    texts = response.text_annotations
    return texts[0].description if texts else "No text found"


def detect_text_byte(byte_content):
    """Use Google Vision API for OCR."""
    image = vision.Image(content=byte_content)
    response = client.text_detection(image=image)
    texts = response.text_annotations
    return texts[0].description if texts else "No text found"


def process_team_stats(file_path):
    """Uploads an image to Cloudinary, applies color inversion and contrast enhancement, and saves it locally."""
    # Upload the image and apply the 'negate' effect to invert colors followed by increasing contrast
    response = cloudinary.uploader.upload(
        file_path,
        transformation=[
            {'effect': "negate"},  # First, invert the colors
            {'effect': "improve:outdoor"}  # Then enhance contrast
        ]
    )
    processed_image_url = response['url']
    print("Processed image URL:", processed_image_url)

    # Download the processed image and save it locally
    image_data = requests.get(processed_image_url).content
    local_filename = "processed_image.png"  # Local filename to save the image
    with open(local_filename, 'wb') as file:
        file.write(image_data)
    print(f"Processed image saved locally as {local_filename}")
    return local_filename


def convert_path(path):
    return path.replace("\\", "/")

def process_team(names_path : str, stats_path : str, team_dict : dict):

    import scan
    names_text = detect_text_path(names_path)
    stats_path_processed = process_team_stats(stats_path)
    stats_text = scan.process_stats(stats_path_processed)
    names_text = names_text.splitlines('\n')
    for index in range(len(names_text)):
        stats_as_ints = [int(stat) for stat in stats_text[index]]
        team_dict[names_text[index]] = stats_as_ints
    return
