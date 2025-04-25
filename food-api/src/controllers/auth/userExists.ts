import { response } from "express";
import { connectToDatabase } from "../../database/connect-to-db";
import { userModel } from "../../models/user.model";

export const UserExists = async (req, res) => {
  try {
    await connectToDatabase();
    const { email } = req.body;
    const user = await userModel.findOne({ email }).select("_id");
    if (user) {
      return res.status(200).json({ exists: true });
    }
    return res.status(200).json({ exists: false });
  } catch (error) {
    console.error("Error checking user existence:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
