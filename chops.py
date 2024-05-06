import numpy as np
import cv2 as cv

def Image_Inversion(Image):
    Height = Image.shape[0]
    Width = Image.shape[1]
    Channels = Image.shape[2]

    Size = (Height, Width, Channels)

    New_image = np.zeros(Size, np.uint8)
    New_image.fill(255)
    New_image = New_image - Image

    return New_image

def main():
	Input_Image = cv.imread("edited-image.png")
	
	Inverted_Image = Image_Inversion(Input_Image)
	
	cv.imwrite("Inverted_Image.png", Inverted_Image)
	input("Please Enter to Continue...")

if __name__ == '__main__':
	main()