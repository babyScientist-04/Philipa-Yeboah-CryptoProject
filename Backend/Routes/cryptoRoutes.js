import express from "express";
import {getAllCryptos,getTopGainers,getNewListings,addCrypto,} from "../controllers/cryptoController.js";
import { addCryptoValidation } from "../middleware/cryptoValidation.js";



const router = express.Router();


router.get("/", getAllCryptos);


router.get("/gainers", getTopGainers);


router.get("/new", getNewListings);


router.post("/", addCryptoValidation, addCrypto);

export default router;