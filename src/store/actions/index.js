import { loginAction, logoutAction, registerAction } from "./auth.action";
import { getInfo, getProfileByUserName, getImageByUserName } from "./user.action";
import { getPostByUserName } from "./post.action";

export default {
  loginAction,
  getInfo,
  logoutAction,
  registerAction,
  getProfileByUserName,
  getImageByUserName,
  getPostByUserName,
}