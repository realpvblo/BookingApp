import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// api => controlles => room.js

// CREATE
router.post("/hotelid", verifyAdmin, createRoom);
// This is the function that creates a new room

// UPDATE
router.put("/:id", verifyAdmin, updateRoom); 
// This is the function that updates the room

// DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
// This is the function that deletes the room

// GET
router.get("/:id", getRoom);
// This is the function that gets the room

// GET ALL
router.get("/", getRooms); 
// This is the function that gets all the rooms

export default router;