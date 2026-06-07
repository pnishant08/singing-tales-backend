import express from "express";
import * as orderController from "./order.controller.js";
import { authMiddleware} from "../../middleware/auth.middleware.js";
import { adminMiddleware } from "../../middleware/admin.middleware.js";

const router = express.Router();

router.put("/:id/status",authMiddleware,adminMiddleware, orderController.updateOrderStatus);

router.post("/", authMiddleware, orderController.createOrder);

router.get("/my",authMiddleware, orderController.getMyOrders);

router.get("/:id",authMiddleware, orderController.getOrder);

router.get("/",authMiddleware,adminMiddleware, orderController.getAllOrders);

export default router;