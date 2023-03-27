import mongoose from "mongoose";
// const { Schema } = mongoose;

const RoomSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        maxPeople: {
            type: Number,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        roomNumbers: [{ number: Number, unabailableDates: { type: [Date] } }],
    }, 
    {timestamps: true}
); // This is the schema for the Rooms

//  -- what is a mongoose schema? --
//A schema is a blueprint for a model. It defines the structure of the document, default values, validators, etc.

export default mongoose.model("Room", RoomSchema);