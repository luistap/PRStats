from ultralytics import YOLO

# Load a model
model = YOLO("yolov8n.pt")  # load pre-trained model

# Use the model
model.train(data="config.yaml", epochs=5, imgsz=1300)  # train the model

# test model prediction on a single image
model.predict("C:/Users/ltper/OneDrive/Desktop/packsource/data/val/images/imageidk.png", save=True, conf=0.001, visualize=True, imgsz=(1318, 842), iou=.5)