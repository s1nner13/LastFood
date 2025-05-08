import { RequestHandler } from "express";
import { userModel } from "../../models/user.model";
import bcrypt from "bcrypt";
export const postAuthSignup: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 2);
    await userModel.create({
      ...req.body,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.status(200).json({
      message: "User neegdlee",
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
