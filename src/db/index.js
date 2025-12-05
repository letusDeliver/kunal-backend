import mongoose from "mongoose";

import { DB_NAME } from "../constant.js";

const connectDb = async () => {
  try {
    const url = process.env.MONGODB_URI;
    console.log(url);
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDb;
