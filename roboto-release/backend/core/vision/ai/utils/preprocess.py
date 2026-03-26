import cv2
import numpy as np

def preprocess_image(frame, size=(640, 640)):
    img = cv2.resize(frame, size)
    img = img[:, :, ::-1]  # BGR → RGB
    img = img.astype(np.float32) / 255.0
    img = np.transpose(img, (2, 0, 1))  # HWC → CHW
    img = np.expand_dims(img, 0)        # Batch
    return img
