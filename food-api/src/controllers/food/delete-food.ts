import { RequestHandler } from "express";
import { foodModel } from "../../models/food.model";

export const deleteFood: RequestHandler = async (req, res) => {
  try {
    const { foodId } = req.query;

    await foodModel.findByIdAndDelete(foodId, {});

    res.status(200).json({
      message: "Food ustgagdlaa",
    });
  } catch (error) {
    res.status(500).json({
      message: "ALDAA",
    });
  }
};
