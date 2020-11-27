import { loginAction, logoutAction, registerAction } from "./auth.action";
import { getInfo, getProfileByUserName, getImageByUserName } from "./user.action";
import { getPostHome, getPostByUserName, createPostAction, getOnePostByIdAction, likeAction } from "./post.action";
import { getCommentByIdPostAction, createCommentAction } from "./comment.action";
import { getFriendAction, getNotFriendAction, getApprovalAction } from "./friend.action";

export default {
  loginAction,
  getInfo,
  logoutAction,
  registerAction,
  getProfileByUserName,
  getImageByUserName,
  getPostHome,
  getPostByUserName,
  createPostAction,
  getOnePostByIdAction,
  getCommentByIdPostAction,
  createCommentAction,
  getFriendAction,
  getNotFriendAction,
  getApprovalAction,
  likeAction,
}