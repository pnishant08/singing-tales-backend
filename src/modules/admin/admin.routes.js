import express from "express";
import * as ctrl from "./admin.controller.js";

const router = express.Router();

router.get("/users", ctrl.getAllUsers);
router.delete("/users/:id", ctrl.deleteUsers);

export default router;