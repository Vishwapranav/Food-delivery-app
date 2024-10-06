import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://vishwa:vishwa@clustername.a8lsh.mongodb.net/?retryWrites=true&w=majority&appName=ClusterName").then(()=>console.log("DataBase Connected"));
}