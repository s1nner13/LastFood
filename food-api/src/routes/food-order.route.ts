import { Router } from "express";
import { getFoodOrder } from "../controllers/food-order/get-food-order";
import { postFoodOrder } from "../controllers/food-order/post-food-order";
import { patchFoodOrder } from "../controllers/food-order/patch-food-order";

const foodOrderRouter = Router();

foodOrderRouter
  .get("/get-order", getFoodOrder)
  .post("/post-order", postFoodOrder)
  .patch("/", patchFoodOrder);

export default foodOrderRouter;
