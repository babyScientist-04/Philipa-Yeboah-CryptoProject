import { body } from "express-validator";

const addCryptoValidation = [
  body("name")
    .trim()
    .notEmpty().withMessage("Name is required")
    .isLength({ max: 100 }).withMessage("Name cannot exceed 100 characters"),

  body("symbol")
    .trim()
    .notEmpty().withMessage("Symbol is required")
    .isLength({ max: 10 }).withMessage("Symbol cannot exceed 10 characters")
    .isAlphanumeric().withMessage("Symbol must contain only letters and numbers"),

  body("price")
    .notEmpty().withMessage("Price is required")
    .isFloat({ min: 0 }).withMessage("Price must be a positive number"),

  body("image")
    .trim()
    .notEmpty().withMessage("Image URL is required")
    .isURL().withMessage("Image must be a valid URL"),

  body("change24h")
    .notEmpty().withMessage("24h change is required")
    .isFloat().withMessage("24h change must be a number (e.g. 2.5 or -3.1)"),
];

export { addCryptoValidation };