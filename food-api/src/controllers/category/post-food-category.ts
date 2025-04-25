import { RequestHandler } from "express";
import { categoryModel } from "../../models/category.model";

export const postCategory: RequestHandler = async (req, res) => {
  try {
    const { categoryName } = req.body;
    await categoryModel.create({
      categoryName,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.status(200).json({
      message: "Category nemegdsen",
    });
  } catch (error) {
    res.status(500).json({
      message: "ALDAA",
    });
  }
};
