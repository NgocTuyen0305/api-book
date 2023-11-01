import express from "express";
import { createOrderProduct, getAllOrder, getOrder, removeOrder, updateOrder } from "../controllers/order";
import { checkPermission } from "../middlewares/checkPimission";

const router = express.Router();
router.post("/create-order", createOrderProduct);
router.get("/get-order", getAllOrder);
router.get("/get-order/:id", getOrder);
router.delete("/remove-order/:id",checkPermission, removeOrder);
router.put("/update-order/:id",checkPermission, updateOrder);
export default router;
