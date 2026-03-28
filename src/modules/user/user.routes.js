import express from "express";
import {
  getProfile,
  updateProfile,
  addAddress,
  deleteAddress,
} from "./user.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";

const router = express.Router();

router.get("/profile", authMiddleware, getProfile);
router.put("/profile", authMiddleware, updateProfile);

router.post("/address", authMiddleware, addAddress);
router.delete("/address/:id", authMiddleware, deleteAddress);

export default router;