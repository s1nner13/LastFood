import { userModel } from "../../models/user.model";

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.body;
    await userModel.findByIdAndDelete(id, {});

    res.status(200).json({
      message: "User ustgagdlaa",
    });
  } catch (error) {
    res.status(500).json({
      message: "ALDAA",
    });
  }
};
