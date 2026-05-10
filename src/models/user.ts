import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/ ,"Enter a valid email."],
        required: true,
        unique: true
    },
    password: {
        type: String,
        minLength: 8,
        required: true,
    },
    verified: {
        type: Boolean,
        default: false,
    },
    otp: {
        type: String,
    },
    otpExp: {
        type: Date,
        default: Date.now,
        expires: 3600
    },

},
{timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;