import express from "express";
import foodRouter from "./routes/food.route";
import categoryRouter from "./routes/category.route";
import { connectToDatabase } from "./database/connect-to-db";
import foodOrderRouter from "./routes/food-order.route";
import cors from "cors";
import authRouter from "./routes/auth.route";
import userRouter from "./routes/user.route";
connectToDatabase();
const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());
app
  .use("/food", foodRouter)
  .use("/food-category", categoryRouter)
  .use("/food-order", foodOrderRouter)
  .use("/auth", authRouter)
  .use("/user", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
