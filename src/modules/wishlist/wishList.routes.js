import express from "express";
import * as ctrl from "./wishList.controller.js";
import {authMiddleware} from "../../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", authMiddleware, ctrl.getWishlist);
router.post("/", authMiddleware, ctrl.addToWishlist);
router.delete("/:productId", authMiddleware, ctrl.removeFromWishlist);

export default router;