import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./Routes/authRoutes.js";
import userRoutes from "./Routes/userRoutes.js";
import cryptoRoutes from "./Routes/cryptoRoutes.js";

const app = express();

const allowedOrorigins = [
  "https://philipayeboah-cryptoproject.netlify.app/" 
  , "http://localhost:5173"
]

app.use(cors({
  origin:  (origin,callback)=>{
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS blocked: ${origin}`));
    }

  },
  credentials:true,
  methods: ["GET","POST","PUT", "DELETE"]
}))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use("/api/auth", authRoutes);
app.use("/api/crypto", cryptoRoutes);
app.use("/api/user", userRoutes);
app.get("/", (req, res) => {
  res.send("API is running...");
});


app.use((req, res) => {
  res.status(404).json({
    message: `Route ${req.originalUrl} not found`,
  });
});


app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(err.status || 500).json({
    message: err.message || "Internal server error",
  });
});

export default app;