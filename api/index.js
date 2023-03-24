import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser"

const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("MongoDB database connected")
    } catch (error) {
        throw error;
    }
}; // This is the function that connects to the database

mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected");
}); // This is the function that runs when the database is disconnected

// MIDDLEWARES 
app.use(cookieParser()); // This is the middleware that allows us to use cookies
app.use(express.json()); // This is the middleware that allows us to use json in our requests

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
}); // This is the middleware that runs when there is an error

app.listen(8800, () => {
    connect()
    console.log("Server is running on port 8800");
});