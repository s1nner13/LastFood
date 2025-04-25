import { Router } from "express";
import { getUser } from "../controllers/user/get-user";
import { postUser } from "../controllers/user/post-user";
import { patchUser } from "../controllers/user/patch-user";
import { deleteUser } from "../controllers/user/delete-user";

const userRouter = Router();

userRouter
  .get("/", getUser)
  .post("", postUser)
  .patch("", patchUser)
  .delete("", deleteUser);
export default userRouter;
