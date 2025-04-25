import { Router } from "express";
import { getFoodOrder } from "../controllers/food-order/get-food-order";
import { postFoodOrder } from "../controllers/food-order/post-food-order";
import { patchFoodOrder } from "../controllers/food-order/patch-food-order";

const foodOrderRouter = Router();

foodOrderRouter
  .get("/", getFoodOrder)
  .post("/", postFoodOrder)
  .patch("/", patchFoodOrder);

export default foodOrderRouter;
