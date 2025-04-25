import { Router } from "express";
import { getCategory } from "../controllers/category/get-food-category";
import { postCategoryasd } from "../controllers/category/post-food-category";
import { patchFoodCategory } from "../controllers/category/patch-food-category";
import { deleteFoodCategory } from "../controllers/category/delete-food-category";

const categoryRouter = Router();

categoryRouter
  .get("/", getCategory)
  .post("/", postCategoryasd)
  .patch("/", patchFoodCategory)
  .delete("/", deleteFoodCategory);
export default categoryRouter;
