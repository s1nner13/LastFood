import { foodModel } from "../../models/food.model";

export const getFoodsCount = async (req, res) => {
  const { categoryId } = req.query;
  const foodCount = await foodModel
    .find(categoryId ? { category: categoryId } : {})
    .countDocuments();
  return res.status(200).json({
    foodCount,
  });
};
