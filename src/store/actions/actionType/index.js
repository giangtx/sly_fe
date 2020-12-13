import { auth } from "./auth.type";
import { user } from "./user.type";
import { post } from "./post.type";
import { comment } from "./comment.type";
import { friend } from "./friend.type";
import { message } from "./message.type";
import { chat } from "./chat.type";
import { group } from "./group.type";

function actionCreator(type, payload) {
  return {
    type,
    payload,
  };
}

export { actionCreator };
export { auth, user, post, comment, friend, message, chat, group };