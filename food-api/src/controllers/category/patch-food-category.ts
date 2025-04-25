import { categoryModel } from "../../models/category.model";
export const patchFoodCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;
    await categoryModel.updateOne({
      categoryName,
    });

    res.status(200).json({
      message: "Category ushinechlegdlee",
    });
  } catch (error) {
    res.status(500).json({
      message: "ALDAA",
    });
  }
};
