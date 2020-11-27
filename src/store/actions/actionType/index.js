import { auth } from "./auth.type";
import { user } from "./user.type";
import { post } from "./post.type";
import { comment } from "./comment.type";
import { friend } from "./friend.type";

function actionCreator(type, payload) {
  return {
    type,
    payload,
  };
}

export { actionCreator };
export { auth, user, post, comment, friend };