
import express from "express";
import { getProfile } from "../Controllers/userController.js";
import { protect } from "../Middleware/authMiddleware.js";

const router = express.Router();


router.get("/profile", protect, getProfile);

export default router;