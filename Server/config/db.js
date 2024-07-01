import mongoose from "mongoose";

const connectDatabase = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/CUI");
        console.log("Connected to Database")
    } catch (error) {
        console.log(error)
    }
}

export {
    connectDatabase
}