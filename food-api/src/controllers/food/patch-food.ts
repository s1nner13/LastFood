import { RequestHandler } from "express";
import { foodModel } from "../../models/food.model";

export const patchFood: RequestHandler = async (req, res) => {
  try {
    const { foodName, price, image, ingredients, category } = req.body;
    const { foodId } = req.query;
    await foodModel.findByIdAndUpdate(foodId, {
      foodName,
      price,
      image,
      ingredients,
      category,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    res.status(200).json({
      message: "Food shinechlegdlee",
    });
  } catch (error) {
    res.status(500).json({
      message: "ALDAA",
    });
  }
};
