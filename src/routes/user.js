import express from "express";
import { checkPermission } from "../middlewares/checkPimission";
import { updateProfile,getProfile, getAllProfile } from "../controllers/user";

const router = express.Router();

router.put("/user/update/:id", updateProfile);
router.get("/user/profile/:id", getProfile);
router.get("/user/profile", getAllProfile);
export default router;
