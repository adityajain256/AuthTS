import express from "express";
import { signUpUser, verifyOTP } from "../controllers/user.controller.js";

const userRouter = express.Router();


userRouter.post("/sign-up", signUpUser)
userRouter.post("/verify-OTP", verifyOTP)
// userRouter.post("/sign-in", )
// userRouter.post("/reset-password", )


export default userRouter;