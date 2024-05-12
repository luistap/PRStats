import os
from os import listdir
from os.path import isfile, join
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] ='packrunners.json'
from google.cloud import vision
import time

def detect_text(path):
    client = vision.ImageAnnotatorClient()
    with open(path, "rb") as image_file:
        content = image_file.read()
    image = vision.Image(content=content)
    response = client.text_detection(image=image)
    texts = response.text_annotations
    ocr_text = []
    for text in texts:
        ocr_text.append(f"\r\n{text.description}")
    if response.error.message:
        raise Exception(
            "{}\nFor more info on error messages, check: "
            "https://cloud.google.com/apis/design/errors".format(response.error.message)
        )
    return texts[0].description

def convert_path(path):
    return path.replace("\\", "/")

def main():
    mypath = r"C:\Users\ltper\PCKSTATS\chars_cropped\row_3_char_2.png"
    mypath = convert_path(mypath)
    text = detect_text(mypath)
    print(text)

if __name__ == "__main__":
     main()