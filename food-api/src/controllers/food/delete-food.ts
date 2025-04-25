import { RequestHandler } from "express";
import { foodModel } from "../../models/food.model";

export const deleteFood: RequestHandler = async (req, res) => {
  try {
    const { id } = req.body;
    await foodModel.findByIdAndDelete(id, {});

    res.status(200).json({
      message: "Food ustgagdlaa",
    });
  } catch (error) {
    res.status(500).json({
      message: "ALDAA",
    });
  }
};
