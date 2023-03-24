import mongoose from "mongoose";
// const { Schema } = mongoose;

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    }, 
    {timestamps: true}
); // This is the schema for the users

//  -- what is a mongoose schema? --
//A schema is a blueprint for a model. It defines the structure of the document, default values, validators, etc.

export default mongoose.model("User", UserSchema);