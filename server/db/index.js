import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/helpdesk`
    );
    console.log(
      "MongoDB Connected! DB Host :",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("MONGODB connnection error", error);
    process.exit(1);
  }
};

export default connectDB;
