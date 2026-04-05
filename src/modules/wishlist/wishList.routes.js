import express from "express";
import * as ctrl from "./wishList.controller.js";
import auth from "../../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", auth, ctrl.getWishlist);
router.post("/", auth, ctrl.addToWishlist);
router.delete("/:productId", auth, ctrl.removeFromWishlist);

export default router;