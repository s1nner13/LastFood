import { userModel } from "../../models/user.model";

export const patchUser = async (req, res) => {
  try {
    const { email, password, address, orderedFoods, role } = req.body;
    const { userId } = req.query;
    await userModel.findByIdAndUpdate(userId, {
      email,
      password,
      address,
      orderedFoods,
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
