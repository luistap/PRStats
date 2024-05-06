from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from google.cloud import vision
import os

app = FastAPI()

# Add CORS middleware for development flexibility
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow any origin
    allow_credentials=True,
    allow_methods=["*"],  # Allow any method
    allow_headers=["*"],  # Allow any headers
)

# Set up Google Vision API client
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'packrunners.json'
client = vision.ImageAnnotatorClient()

def detect_text(image_data):
    """Use Google Vision API for OCR."""
    try:
        image = vision.Image(content=image_data)
        response = client.text_detection(image=image)
        texts = response.text_annotations
        return texts[0].description if texts else "No text found"
    except Exception as e:
        print(f"Error during OCR: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/upload/")
async def upload_image(files: list[UploadFile] = File(...)):
    print("Received images for processing.")
    results = {}

    labels = ["team1_names", "team2_names", "team1_stats", "team2_stats"]
    expected_file_count = 4

    # Check if the number of files received matches the expected count
    if len(files) != expected_file_count:
        error_message = f"Expected {expected_file_count} image files, received {len(files)}."
        print(error_message)
        raise HTTPException(status_code=400, detail=error_message)

    for label, file in zip(labels, files):
        try:
            image_data = await file.read()
            ocr_result = detect_text(image_data)
            results[label] = ocr_result
            print(f"{label} Extracted:")
            print(ocr_result)
        except Exception as e:
            print(f"Failed processing {label}: {e}")
            continue

    return {"message": "OCR results printed to console", "results": results}

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
