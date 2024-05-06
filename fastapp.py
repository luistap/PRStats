from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from google.cloud import vision
import os

app = FastAPI()

# Add CORS middleware for development flexibility
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Consider specifying domains in production
    allow_credentials=True,
    allow_methods=["*"],  # Consider specifying allowed methods in production
    allow_headers=["*"],  # Consider specifying allowed headers in production
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
async def upload_image(team1_names: UploadFile = File(...), team2_names: UploadFile = File(...), 
                       team1_stats: UploadFile = File(...), team2_stats: UploadFile = File(...)):
    # This function handles four images, processes them, and returns OCR results.
    print("are we in upload ?")
    results = {}
    files = {
        "team1_names": team1_names,
        "team2_names": team2_names,
        "team1_stats": team1_stats,
        "team2_stats": team2_stats
    }
    for label, file in files.items():
        image_data = await file.read()
        ocr_result = detect_text(image_data)
        results[label] = ocr_result
        print(f"{label} Extracted:")
        print(ocr_result)

    return {"message": "OCR results printed to console", "results": results}

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
