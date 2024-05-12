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

def upload_and_invert_image(file_path):
    """Uploads an image to Cloudinary, applies a color inversion, and saves it locally."""
    # Upload the image and apply the 'negate' effect to invert colors
    response = cloudinary.uploader.upload(
        file_path,
        transformation=[{'effect': "negate"}]
    )
    inverted_image_url = response['url']
    print("Inverted image URL:", inverted_image_url)

    # Download the inverted image and save it locally
    image_data = requests.get(inverted_image_url).content
    local_filename = "inverted_image.png"  # Local filename to save the image
    with open(local_filename, 'wb') as file:
        file.write(image_data)
    print(f"Inverted image saved locally as {local_filename}")

# Example usage
image_path = r"C:\Users\ltper\PCKSTATS\chars_cropped\row_3_char_2.png".replace("\\", "/")
upload_and_invert_image(image_path)
