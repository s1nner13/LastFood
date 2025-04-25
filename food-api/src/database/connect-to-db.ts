import { connect } from "mongoose";

export const connectToDatabase = async () => {
  await connect(
    "mongodb+srv://bayargun:killer567828@cluster0.cwd3mfl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("Connect to database");
};
