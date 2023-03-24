import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauth", verifyToken, (req, res, next) => {
//     res.send("You are authenticated");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("You are logged in as User ");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("You are logged in as Admin");
// });

// api => controlles => user.js

// UPDATE
router.put("/:id", verifyUser, updateUser); 
// This is the function that updates the User

// DELETE
router.delete("/:id", verifyUser, deleteUser);
// This is the function that deletes the User

// GET
router.get("/:id", verifyUser, getUser);
// This is the function that gets the User

// GET ALL
router.get("/", verifyAdmin, getUsers); 
// This is the function that gets all the Users

export default router;