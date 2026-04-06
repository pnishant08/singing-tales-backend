import express from "express";

import authRoutes from "../modules/auth/auth.routes.js";
import userRoutes from "../modules/user/user.routes.js";
import productRoutes from "../modules/product/product.routes.js";
import cartRoutes from "../modules/cart/cart.routes.js";
import orderRoutes from "../modules/order/order.routes.js";
import wishListRoutes from "../modules/wishlist/wishList.routes.js";
import reviewRoutes from "../modules/review/review.routes.js";
import customCardRoutes from "../modules/customCard/customCard.routes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/product", productRoutes);
router.use("/cart", cartRoutes);
router.use("/order", orderRoutes);
router.use("/wishList", wishListRoutes);
router.use("/review", reviewRoutes);
router.use("/custom-card", customCardRoutes);


export default router;