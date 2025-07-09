import mongoose from "mongoose";

const connectDB = async() =>{
    try {
        mongoose.connection.on('connected',()=> console.log('Database Connected'));
        await mongoose.connect(`${process.env.DATABASE_URL}/cineswift`)
    } catch (error) {
        
    }
}

export default connectDB