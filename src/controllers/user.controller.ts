import mongoose from "mongoose";
import type { Request, Response } from "express";
import User from "../models/user.js";
import bcrypt from "bcryptjs"
import { decodeJwt, signJwt } from "../util/jwt.js";


export const signUpUser = async (req: Request, res: Response) => {
    const {name, email, password} = req.body;
    try {
        // if user already exist
        const exist = await User.findOne({email});
        if(exist){
            return res.status(409).json({message: "user already exist."});
        }
        const hashedPass = await bcrypt.hash(password, 10);
        const user = await User.create({
            name, 
            email, 
            password: hashedPass,
        })
        const token = await signJwt(String(user._id));

        res.cookie("token", token, {
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        const otp: string = String(Math.floor(Math.random() * ((Math.pow(10, 6) - 1) - Math.pow(10,5)) + Math.pow(10, 5)));
        user.otp = String(otp);
        user.save();
        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json({ message: "Internal server error." });
    }
}

export const verifyOTP = async (req: Request, res: Response) => {
    const { otp } = req.body;
    const { token } = req.cookies;
    if(!token){
        return res.status(400).json({message: "Cookies not present."})
    }
    try {
        const userId = await decodeJwt(token);
        const user = await User.findById(userId);

        if(!user){
            return res.status(400).json({message: "no User found."})
        }

        if(user.otp != otp){
            return res.status(400).json({message: "OTP doesn't match."})
        }

        user.verified = true;
        user.save;
        return res.status(200).json({message: "User verified successfully."})
    } catch (error) {
        return res.status(500).json({message: `server error: ${error}`});
    }

}