import { userModel } from "../../models/user.model";

export const getVerifyPass = async (req, res) => {
  const verify = await userModel.find({});

  return res.status(200).json({
    verify,
  });
};
