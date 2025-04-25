import { foodModel } from "../../models/food.model";

export const getFoods = async (req, res) => {
  const food = await foodModel.find({}).populate("category");

  return res.status(200).json({
    food,
  });
};
