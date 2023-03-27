import express from "express";
import Hotel from "../models/Hotel.js";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

// api => controlles => hotel.js

// CREATE
router.post("/", verifyAdmin, createHotel);
// This is the function that creates a new hotel

// UPDATE
router.put("/:id", verifyAdmin, updateHotel); 
// This is the function that updates the hotel

// DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
// This is the function that deletes the hotel

// GET
router.get("/find/:id", getHotel);
// This is the function that gets the hotel

// GET ALL
router.get("/", getHotels); 
// This is the function that gets all the hotels

router.get("/countByCity", countByCity); 
router.get("/countByType", countByType );  


export default router;