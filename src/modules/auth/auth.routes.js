import express from "express";
import * as ctrl from "./auth.controller.js";

const router = express.Router();

router.post("/send-otp", ctrl.sendOtp);
router.post("/verify-otp", ctrl.verifyOtp);
router.post("/complete-signup", ctrl.completeSignup);
router.post("/login", ctrl.login);

export default router;