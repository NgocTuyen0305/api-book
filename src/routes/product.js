import express from "express";
import { getAll, get, create, update, remove } from "../controllers/product";
import { checkPermission } from "../middlewares/checkPimission";
const router = express.Router();

router.get("/products", getAll);
router.get("/products/:id", get);
router.post("/products", checkPermission, create);
router.put("/products/:id", checkPermission, update);
router.delete("/products/:id", checkPermission, remove);
export default router;
