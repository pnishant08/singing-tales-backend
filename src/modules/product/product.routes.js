import express from "express";
import * as productController from "./product.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { adminMiddleware } from "../../middleware/admin.middleware.js";

const router =express.Router();

router.post("/",authMiddleware,adminMiddleware,productController.createProdduct);
router.get("/",authMiddleware,productController.getAllProducts);
router.get("/:id",authMiddleware,productController.getPoductById);
router.delete("/:id",authMiddleware,adminMiddleware,productController.deleteProduct);

export default router;