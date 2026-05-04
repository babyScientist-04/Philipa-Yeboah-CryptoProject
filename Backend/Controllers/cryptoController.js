import { validationResult } from "express-validator";
import Crypto from "../models/crypto.js";


const getAllCryptos = async (req, res) => {
  try {
    const cryptos = await Crypto.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: cryptos.length,
      data: cryptos,
    });
  } catch (error) {
    console.error("getAllCryptos error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error. Could not fetch cryptocurrencies.",
    });
  }
};


const getTopGainers = async (req, res) => {
  try {
    const gainers = await Crypto.find({ change24h: { $gt: 0 } }) // only positive
      .sort({ change24h: -1 }); // highest first

    return res.status(200).json({
      success: true,
      count: gainers.length,
      data: gainers,
    });
  } catch (error) {
    console.error("getTopGainers error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error. Could not fetch top gainers.",
    });
  }
};


const getNewListings = async (req, res) => {
  try {
    const newListings = await Crypto.find().sort({ createdAt: -1 }).limit(20);

    return res.status(200).json({
      success: true,
      count: newListings.length,
      data: newListings,
    });
  } catch (error) {
    console.error("getNewListings error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error. Could not fetch new listings.",
    });
  }
};


const addCrypto = async (req, res) => {
  // 1. Check validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: errors.array().map((err) => ({
        field: err.path,
        message: err.msg,
      })),
    });
  }

  const { name, symbol, price, image, change24h } = req.body;

  try {
    // 2. Check for duplicates
    const existing = await Crypto.findOne({
      $or: [{ name }, { symbol: symbol.toUpperCase() }],
    });

    if (existing) {
      return res.status(409).json({
        success: false,
        message: `A cryptocurrency with this ${
          existing.name === name ? "name" : "symbol"
        } already exists`,
      });
    }

    // 3. Create and save
    const crypto = await Crypto.create({ name, symbol, price, image, change24h });

    return res.status(201).json({
      success: true,
      message: `${crypto.name} (${crypto.symbol}) added successfully`,
      data: crypto,
    });
  } catch (error) {
    console.error("addCrypto error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error. Could not add cryptocurrency.",
    });
  }
};

export { getAllCryptos, getTopGainers, getNewListings, addCrypto };