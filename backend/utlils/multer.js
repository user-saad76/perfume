import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinary.js";

// Configure storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "signature-series", // folder name in Cloudinary
    allowed_formats: ["jpg", "jpeg", "png"],
    public_id:(req,file)=>`category-${Date.now()}`,
  },
});

export const upload = multer({ storage });
