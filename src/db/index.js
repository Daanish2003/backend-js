import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
  } catch (error) {
    console.log("MONGODB connection error ", error);
    process.exit(1);
  } finally {
    console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
  }
};

export default connectDB
