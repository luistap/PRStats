import cloudinary
import cloudinary.uploader
import cloudinary.api
import requests

# Configure your Cloudinary credentials
cloudinary.config(
    cloud_name="degzpxhjw",  # Your cloud name
    api_key="396329727495689",  # Your API key
    api_secret="iMxbks6PueFT0oa8nUd1NOR7ARo"  # Your API secret
)

def upload_and_process_image(file_path):
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

# Example usage
image_path = r"C:\Users\ltper\PCKSTATS\temp_images\team2_stats.png".replace("\\", "/")
upload_and_process_image(image_path)
