import { loginAction, logoutAction, registerAction } from "./auth.action";
import { getInfo, getProfileByUserName, getImageByUserName } from "./user.action";
import { getPostHome, getPostByUserName, createPostAction, getOnePostByIdAction, likeAction, getPostByGroupAction } from "./post.action";
import { getCommentByIdPostAction, createCommentAction } from "./comment.action";
import { getFriendAction, getNotFriendAction, getApprovalAction, addFriendAction, approvalFriendAction } from "./friend.action";
import { getChatByUserAction } from "./chat.action";
import { getMessageByChatAction, addMessageAction } from "./message.action";
import { getUserGroupAction, getOtherGroupAction, joinGroupAction, getGroupByIdAction } from "./group.action";

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
  getChatByUserAction,
  getMessageByChatAction,
  addMessageAction,
  addFriendAction,
  approvalFriendAction,
  getUserGroupAction,
  getOtherGroupAction,
  joinGroupAction,
  getPostByGroupAction,
  getGroupByIdAction,
}