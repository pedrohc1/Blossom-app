import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://Pedro:WZuv3H7YvsImBzCQ@cluster0.zwhgdby.mongodb.net/blossom-app?retryWrites=true&w=majority&appName=Cluster0"
    );
    if (connection) {
      console.log("Connection established");
    }
  } catch (error) {
    console.log("error in connectToDatabase", error);
    throw error;
  }
};

export default connectToDatabase;
