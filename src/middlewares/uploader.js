import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  allowedFormats: ['jpg','png'],
  params:{
    folder: "Book-redux",
  },
})
const upload = multer({storage: storage});

export default upload;
