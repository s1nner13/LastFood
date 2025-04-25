import { userModel } from "../../models/user.model";
import bcrypt from "bcrypt";
export const postAuthSignup = async (req, res) => {
  try {
    const {
      email,
      password,
      phoneNumber,
      address,
      orderedFoods,
      isVerified,
      role,
    } = req.body;
    const hashedPassword = await bcrypt.hash(password, 2);
    await userModel.create({
      email,
      password: hashedPassword,
      phoneNumber,
      address,
      orderedFoods,
      isVerified,
      role,
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
