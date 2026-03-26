import os
import json
import cv2

class DatasetExporter:
    def __init__(self, base_dir="datasets"):
        self.base_dir = base_dir
        os.makedirs(base_dir, exist_ok=True)

    def create_dataset(self, name):
        path = os.path.join(self.base_dir, name)
        os.makedirs(path, exist_ok=True)
        os.makedirs(os.path.join(path, "images"), exist_ok=True)
        os.makedirs(os.path.join(path, "labels"), exist_ok=True)
        os.makedirs(os.path.join(path, "masks"), exist_ok=True)
        return path

    def save_image(self, dataset_path, frame_id, frame):
        img_path = os.path.join(dataset_path, "images", f"{frame_id:06d}.jpg")
        cv2.imwrite(img_path, frame)
        return img_path

    def save_label(self, dataset_path, frame_id, text):
        label_path = os.path.join(dataset_path, "labels", f"{frame_id:06d}.txt")
        with open(label_path, "w") as f:
            f.write(text)
        return label_path

    def save_mask(self, dataset_path, frame_id, mask_png):
        mask_path = os.path.join(dataset_path, "masks", f"{frame_id:06d}.png")
        with open(mask_path, "wb") as f:
            f.write(mask_png)
        return mask_path
