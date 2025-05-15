import express from "express";
import foodRouter from "../src/routes/food.route";
import categoryRouter from "../src/routes/category.route";
import { connectToDatabase } from "../src/database/connect-to-db";
import foodOrderRouter from "../src/routes/food-order.route";
import cors from "cors";
import authRouter from "../src/routes/auth.route";
import userRouter from "../src/routes/user.route";
import dotenv from "dotenv";
connectToDatabase();
const app = express();
dotenv.config();
const port = 3001;
app.use(express.json());
app.use(cors());
app
  .use("/food", foodRouter)
  .use("/category", categoryRouter)
  .use("/food-order", foodOrderRouter)
  .use("/auth", authRouter)
  .use("/user", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
