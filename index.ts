import app from "./src/app.js"
import connectDB from "./src/db/dbConnection.js";


const port: string = process.env.PORT || "3000";

async function main() {
    try {
        await connectDB()
        
    } catch (error) {
        throw new Error("Failed to load server.")
    } finally{
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        })
    }
}

main();