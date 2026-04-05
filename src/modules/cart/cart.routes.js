import express from "express";
import * as cartController from "./cart.controller.js";

const router = express.Router();

router.get("/", cartController.getCart);

router.post("/", cartController.addItem);

router.patch("/:itemId", cartController.updateItem);

router.delete("/:itemId", cartController.removeItem);

router.delete("/", cartController.clearCart);

export default router;