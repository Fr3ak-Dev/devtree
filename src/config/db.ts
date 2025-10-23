import mongoose from "mongoose"
import colors from "colors"

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI)
        const url = `${connection.host}:${connection.port}`
        console.log(colors.cyan(`MongoDB connected on: ${url}`))
    } catch (error) {
        console.error(colors.bgRed.white.bold(`MongoDB connection error: ${error.message}`))
        process.exit(1)
    }
}