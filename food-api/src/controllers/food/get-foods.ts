import { foodModel } from "../../models/food.model";

export const getFoods = async (req, res) => {
  const { categoryId } = req.query;
  const food = await foodModel
    .find(categoryId ? { category: categoryId } : {})
    .populate("category");

  return res.status(200).json({
    food,
  });
};
