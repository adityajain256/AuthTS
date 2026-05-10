import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "dev.aditya.developer@gmail.com",
        pass: "nciojurevinrcxox"
    }
})

async function testingMail () {
    try {
        await transporter.verify()
        console.log("server is ready to take messages.")
    } catch (error) {
        console.log("Mail services are not ready. configuration", error)
    }
}

// testingMail();

export default transporter;