import mongoose from "mongoose";
import { config } from "./config"; // Assuming config is exported from config file

const connectDB = async () => {
  try {
    await mongoose.connect(config.databaseUrl as string);

    mongoose.connection.on("connected", () => {
      console.log("Connected successfully to the database");
    });

    mongoose.connection.on("error", (error) => {
      console.error("Error in connecting to the database", error);
    });
  } catch (error) {
    console.error("Failed to connect to the database", error);
    process.exit(1);
  }
};

export default connectDB;