import express from "express";
import { register, login, logout } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";
import {registerValidation,loginValidation,} from "../middleware/validationMiddleware.js";

const router = express.Router();

// POST /api/auth/register
router.post("/register", registerValidation, register);

// POST /api/auth/login
router.post("/login", loginValidation, login);

// POST /api/auth/logout
router.post("/logout", logout);

// GET /api/auth/me (protected)
router.get("/me", protect, (req, res) => {
  res.json({
    user: req.user,
  });
});

export default router;