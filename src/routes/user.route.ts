import express from "express";
import { signUpUser, verifyOTP, requestResetPassword, resetPassword } from "../controllers/user.controller.js";

const userRouter = express.Router();


userRouter.post("/sign-up", signUpUser)
userRouter.post("/verify-OTP", verifyOTP)
// userRouter.post("/sign-in", )
userRouter.post("/request-reset-password", requestResetPassword);
userRouter.post("/reset-pass", resetPassword)


export default userRouter;