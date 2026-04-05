import express from "express";
import * as ctrl from "./review.controller.js";
import auth from "../../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", auth, ctrl.addReview);
router.get("/:productId", ctrl.getReviews);

export default router;