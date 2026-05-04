import { validationResult } from "express-validator";
import User from "../models/userModel.js";
import { generateToken, sendTokenCookie } from "../Utils/tokenUtils.js";

// Helper: handle validation errors
const handleValidation = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ message: "Invalid input", errors: errors.array() });
    return true;
  }
  return false;
};

// REGISTER
export const register = async (req, res) => {
  if (handleValidation(req, res)) return;

  const { name, email, password } = req.body;

  try {
    if (await User.findOne({ email })) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const user = await User.create({ name, email, password });

    const token = generateToken(user._id);
    sendTokenCookie(res, token);

    res.status(201).json({
      message: "User created",
      user: { id: user._id, name, email },
      token,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// LOGIN
export const login = async (req, res) => {
  if (handleValidation(req, res)) return;

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id);
    sendTokenCookie(res, token);

    res.json({
      message: "Login successful",
      user: { id: user._id, name: user.name, email },
      token,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// LOGOUT
export const logout = (req, res) => {
  res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });
  res.json({ message: "Logged out" });
};