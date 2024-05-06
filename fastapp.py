from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from google.cloud import vision
from PIL import Image
import io
import os

app = FastAPI()

# Add CORS middleware for development flexibility
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Set up Google Vision API client
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'packrunners.json'
client = vision.ImageAnnotatorClient()

def detect_text(image_path):
    """Use Google Vision API for OCR."""
    with open(image_path, "rb") as image_file:
        content = image_file.read()
    image = vision.Image(content=content)
    response = client.text_detection(image=image)
    texts = response.text_annotations
    return texts[0].description if texts else "No text found"

@app.post("/upload/")
async def upload_image(team1_names: UploadFile = File(...), team2_names: UploadFile = File(...), 
                       team1_stats: UploadFile = File(...), team2_stats: UploadFile = File(...)):
    print("Endpoint Hit: Received images for processing.")
    try:
        results = {}
        files = {
            "team1_names": team1_names,
            "team2_names": team2_names,
            "team1_stats": team1_stats,
            "team2_stats": team2_stats
        }
        for label, file in files.items():
            image_data = await file.read()
            if image_data:  # Check if data is actually received
                print(f"Data for {label} received, size {len(image_data)} bytes")
            else:
                print(f"No data received for {label}")
                continue  # Skip further processing for this file

            image_path = save_image(image_data, label)
            ocr_result = detect_text(image_path)
            results[label] = ocr_result
            print(f"{label} Extracted:")
            print(ocr_result)
        return {"message": "OCR results printed to console", "results": results}
    except Exception as e:
        print(f"An error occurred: {e}")
        raise HTTPException(status_code=500, detail=str(e))


def save_image(image_data, label):
    """Save the image to a temporary directory and return the path."""
    os.makedirs('temp_images', exist_ok=True)
    file_path = f'temp_images/{label}.png'
    with open(file_path, 'wb') as image_file:
        image_file.write(image_data)
    return file_path

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
