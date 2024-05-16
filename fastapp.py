from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from PIL import Image
import io
import os
import utilities

app = FastAPI()

# Add CORS middleware for development flexibility
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/upload/")
async def upload_image(team1_names: UploadFile = File(...), team2_names: UploadFile = File(...), 
                       team1_stats: UploadFile = File(...), team2_stats: UploadFile = File(...)):
    print("Endpoint Hit: Received images for processing.")
    try:
        files = {
            "team1_names": team1_names,
            "team2_names": team2_names,
            "team1_stats": team1_stats,
            "team2_stats": team2_stats
        }
        paths = {}
        for label, file in files.items():
            image_data = await file.read()
            if image_data:  # Check if data is actually received
                print(f"Data for {label} received, size {len(image_data)} bytes")
            else:
                print(f"No data received for {label}")
                continue  # Skip further processing for this file
            paths[label] = save_image(image_data, label)
    except Exception as e:
        print(f"An error occurred: {e}")
        raise HTTPException(status_code=500, detail=str(e))
    
    team1_info = {}
    team2_info = {}
    # files are saved now process each team
    utilities.process_team(paths['team1_names'], paths['team1_stats'], team1_info)
    utilities.process_team(paths['team2_names'], paths['team2_stats'], team2_info)
    print(team1_info)
    print(team2_info)
    return

def print_stats(final_stats : dict):
    
    for key in final_stats.keys():
        print("Names: " + key)
        print(final_stats[key])
    return

def save_image(image_data, label):
    """Save the image to a temporary directory and return the path."""
    os.makedirs('temp_images', exist_ok=True)
    file_path = f'temp_images/{label}.png'
    with open(file_path, 'wb') as image_file:
        image_file.write(image_data)
    return file_path

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
