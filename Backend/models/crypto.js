import mongoose from "mongoose";

const cryptoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Cryptocurrency name is required"],
      trim: true,
      unique: true,
    },
    symbol: {
      type: String,
      required: [true, "Symbol is required"],
      trim: true,
      uppercase: true,
      unique: true,
      maxlength: [10, "Symbol cannot exceed 10 characters"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },
    image: {
      type: String,
      required: [true, "Image URL is required"],
      trim: true,
    },
    change24h: {
      type: Number,
      required: [true, "24h change percentage is required"],
      // e.g. +2.5 or -3.1
    },
  },
  {
    timestamps: true, // createdAt used for "new listings" sort
  }
);

export default mongoose.model("Crypto", cryptoSchema);