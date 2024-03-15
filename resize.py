from PIL import Image
import os

def crop_sides_and_resize_images(directory, target_size=(1498, 842), crop_percent_width=0.12):
    for filename in os.listdir(directory):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            filepath = os.path.join(directory, filename)
            with Image.open(filepath) as img:
                # Ensure the image is resized to the target size first (if necessary)
                if img.size != target_size:
                    img = img.resize(target_size, Image.Resampling.LANCZOS)

                w, h = img.size
                # Calculate new width to crop from sides
                new_width = w * (1 - crop_percent_width)

                # Calculate how much to crop from the left and right sides
                crop_width_each_side = (w - new_width) / 2

                # Define the crop box: left, upper, right, lower
                crop_box = (crop_width_each_side, 0, w - crop_width_each_side, h)

                # Crop the image
                cropped_img = img.crop(crop_box)

                # Optionally resize if a different target size is desired after cropping
                # cropped_img = cropped_img.resize(new_target_size, Image.Resampling.LANCZOS)

                # Save the cropped image back to its original location
                cropped_img.save(filepath)
                print(f"Cropped from sides and resized {filename}")

# Directories containing your images
train_dir = "C:/Users/ltper/OneDrive/Desktop/packsource/data/train/images"
val_dir = "C:/Users/ltper/OneDrive/Desktop/packsource/data/val/images"

# Crop from the sides and resize images in both directories
crop_sides_and_resize_images(train_dir)
crop_sides_and_resize_images(val_dir)

print("Image cropping from sides and resizing complete.")
