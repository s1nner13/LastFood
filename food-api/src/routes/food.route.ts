import { Router } from "express";
import { getFood } from "../controllers/food/get-food";
import { deleteFood } from "../controllers/food/delete-food";
import { patchFood } from "../controllers/food/patch-food";
import { getFoods } from "../controllers/food/get-foods";
import { createFood } from "../controllers/food/create-food";
import { getFoodsCount } from "../controllers/food/get-foods-count";

const foodRouter = Router();

foodRouter
  .get("/", getFood)
  .delete("/", deleteFood)
  .patch("/patch", patchFood)
  .get("/foods", getFoods)
  .get("/foods/count", getFoodsCount)
  .post("/create-food", createFood);

export default foodRouter;
