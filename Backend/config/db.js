import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const DbCon = async () => {
  try {
    // Use the MongoDB URI from environment variable
    const mongodbUri = process.env.MONGODB_URI;

    if (!mongodbUri) {
      throw new Error('MongoDB URI is not defined in the environment variables.');
    }

    await mongoose.connect(mongodbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Mongodb is connected');
  } catch (error) {
    console.log("Error in MongoDB connection", error);
  }
};

export default DbCon;
