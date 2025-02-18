import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_DB}`);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
        process.exit(1);
    }
}

export default dbConnect;