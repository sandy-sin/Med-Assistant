import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoUrl = process.env.MongoDBUrl || "mongodb://127.0.0.1:27017/disease_prediction";

const connect = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("Connected to MongoDB at:", mongoUrl);
  } catch (err) {
    console.log("MongoDB Connection Warning: ", err.message);
    console.log("Backend server will continue running (User auth endpoints will fail until MongoDB is active).");
  }
};

export default connect;

