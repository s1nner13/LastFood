import { userModel } from "../../models/user.model";

export const patchUser = async (req, res) => {
  try {
    const { userId } = req.query;
    const updateData = req.body;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    updateData.updatedAt = new Date();

    const updatedUser = await userModel.findByIdAndUpdate(userId, updateData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Patch user error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
