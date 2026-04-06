import express from "express";
import * as ctrl from "./review.controller.js";
import {authMiddleware} from "../../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, ctrl.addReview);
router.get("/:productId", ctrl.getReviews);

export default router;