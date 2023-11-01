import express from "express";
import { uploadImage } from "../controllers/upload";
import upload from '../middlewares/uploader';
const router = express.Router();

router.post('/upload',upload.array('file',3), uploadImage);
export default router