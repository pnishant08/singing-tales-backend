import express from "express";
import * as cartController from "./cart.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";

const router = express.Router();

router.get("/",authMiddleware, cartController.getCart);

router.post("/",authMiddleware, cartController.addItem);

router.patch("/:itemId",authMiddleware, cartController.updateItem);

router.delete("/:itemId",authMiddleware, cartController.removeItem);

router.delete("/",authMiddleware, cartController.clearCart);

export default router;