import express from "express";
import * as ctrl from "./customCard.controller.js";
import {authMiddleware} from "../../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, ctrl.createCustomCard);
router.get("/", authMiddleware, ctrl.getMyCards);
router.put("/:id", authMiddleware, ctrl.updateCard);
router.delete("/:id", authMiddleware, ctrl.deleteCard);

export default router;