import mongoose from "mongoose";
import "dotenv/config";

const connectDb = async () => {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log("Database Already Connected");
    return;
  }

  if (connectionState === 2) {
    console.log("Database connecting....");
  }

  console.log("testing database connection")
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "groceries-app",
      bufferCommands: true,
    });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Error:", error.message);
    throw new Error("Error: ", error.message);
  }
};

export default connectDb;
