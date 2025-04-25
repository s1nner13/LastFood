import { userModel } from "../../models/user.model";

export const patchUser = async (req, res) => {
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
    await userModel.updateOne({
      email,
      password,
      phoneNumber,
      address,
      orderedFoods,
      isVerified,
      role,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    res.status(200).json({
      message: "user shinechlegdlee",
    });
  } catch (error) {
    res.status(500).json({
      message: "ALDAA",
    });
  }
};
