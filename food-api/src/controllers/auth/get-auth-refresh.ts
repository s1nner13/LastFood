import { userModel } from "../../models/user.model";

export const getAuthRefresh = async (req, res) => {
  const auth = await userModel.find({});

  return res.status(200).json({
    auth,
  });
};
