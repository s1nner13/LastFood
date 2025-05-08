import { Router } from "express";
import { getAuthRefresh } from "../controllers/auth/get-auth-refresh";
import { postAuthSignin } from "../controllers/auth/post-auth-signin";
import { postAuthSignup } from "../controllers/auth/post-auth-signup";
import { postResetpassword } from "../controllers/auth/post-resetpassword";
import { getVerifyPass } from "../controllers/auth/get-verify-password";
import { UserExists } from "../controllers/auth/userExists";
import { authenticationMiddleware } from "../middlewares/authentication-middleware";
const authRouter = Router();

authRouter
  .get("/refresh", authenticationMiddleware, getAuthRefresh)
  .get("/verify-reset-password-request", getVerifyPass)
  .post("/sign-in", postAuthSignin)
  .post("/sign-up", postAuthSignup)
  .post("/reset-password-request", postResetpassword)
  .post("/user-exists", UserExists);
export default authRouter;
