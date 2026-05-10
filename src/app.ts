import express from "express";
import dotenv from "dotenv"
import userRouter from "./routes/user.route.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", userRouter);


export default app;