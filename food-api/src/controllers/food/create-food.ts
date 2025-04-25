import { RequestHandler } from "express";
import { foodModel } from "../../models/food.model";

export const createFood: RequestHandler = async (req, res) => {
  try {
    const { foodName, price, image, ingredients, category } = req.body;
    await foodModel.create({
      foodName,
      price,
      image,
      ingredients,
      category,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.status(200).json({
      message: "Food nemegdsen",
    });
  } catch (error) {
    res.status(500).json({
      message: "ALDAA",
    });
  }
};
