import { categoryModel } from "../../models/category.model";

export const deleteFoodCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;
    await categoryModel.deleteOne({
      categoryName,
    });

    res.status(200).json({
      message: "Category ustgagdlaa",
    });
  } catch (error) {
    res.status(500).json({
      message: "ALDAA",
    });
  }
};
