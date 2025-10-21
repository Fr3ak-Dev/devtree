import mongoose from "mongoose"

export  const connectDB = async () => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URI)
        const url = `${connection.host}:${connection.port}`
        console.log(`MongoDB connected on: ${url}`)
    } catch (error) {
        console.error('MongoDB connection error:', error.message)
        process.exit(1)
    }
}