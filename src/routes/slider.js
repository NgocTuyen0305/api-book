import express from "express";
import { get,create } from '../controllers/slider.js'
const router = express.Router();

router.get("/get-slider", get);
router.post("/create-slider", create);
export default router;
