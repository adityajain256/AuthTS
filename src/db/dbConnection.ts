import mongoose from "mongoose";


const connectDB = async () => {
    const url: string = String(process.env.MONGO_URI);
    try {
        const con = await mongoose.connect(url);
        console.log("Database connected: "+ con.connection.host)
    } catch (error) {
        throw new Error(`DB connection failed: ${error}`)
    }
}

export default connectDB;