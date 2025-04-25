import { Router } from "express";
import { getFood } from "../controllers/food/get-food";
import { deleteFood } from "../controllers/food/delete-food";
import { patchFood } from "../controllers/food/patch-food";
import { getFoods } from "../controllers/food/get-foods";
import { createFood } from "../controllers/food/create-food";

const foodRouter = Router();

foodRouter
  .get("/", getFood)
  .delete("/", deleteFood)
  .patch("/", patchFood)
  .get("/", getFoods)
  .post("/", createFood);

export default foodRouter;
