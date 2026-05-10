import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config();

export const signJwt = async (userId: string) => {
    try {
        const secret: string = String(process.env.JWT_SECRET);
        const token: string = jwt.sign(userId, secret)
        return token;
    } catch (error) {
        throw new Error("jwt not signed.")
    }
}

export const decodeJwt = async (token: string) => {
    try {
        const userId = jwt.decode(token);
        console.log(userId)
        return userId;
    } catch (error) {
        throw new Error("jwt not decoded.")
    }
}