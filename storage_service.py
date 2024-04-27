import os
from google.cloud import storage
from google.oauth2 import service_account
import aiohttp

# Path to your service account key file
SERVICE_ACCOUNT_FILE = 'packrunners.json'
# The name of your Google Cloud Storage bucket
BUCKET_NAME = 'boards_from_discord'

def authenticate_gcs():
    """Create a GCS client using a service account."""
    credentials = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE,
        scopes=["https://www.googleapis.com/auth/cloud-platform"],
    )
    storage_client = storage.Client(credentials=credentials, project=credentials.project_id)
    return storage_client

async def upload_stream_to_gcs(data, destination_blob_name):
    """Uploads byte data to Google Cloud Storage."""
    storage_client = authenticate_gcs()
    print("WE HERE 1")
    bucket = storage_client.get_bucket(BUCKET_NAME)
    blob = bucket.blob(destination_blob_name)
    # Upload the byte data
    blob.upload_from_string(data)

    # Optionally, make the blob publicly accessible.
    blob.make_public()

    # The public URL can be used to directly access the uploaded file via HTTP.
    return f"https://storage.googleapis.com/{BUCKET_NAME}/{destination_blob_name}"

def get_public_url_of_blob(destination_blob_name):
    """Generate a public URL for the blob to make it accessible over the internet."""
    storage_client = authenticate_gcs()
    bucket = storage_client.bucket(BUCKET_NAME)
    blob = bucket.blob(destination_blob_name)
    
    # Optionally, make the blob publicly accessible.
    blob.make_public()
    
    return blob.public_url
