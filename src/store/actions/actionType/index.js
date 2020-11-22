import { auth } from "./auth.type";
import { user } from "./user.type";
import { post } from "./post.type";

function actionCreator(type, payload) {
  return {
    type,
    payload,
  };
}

export { actionCreator };
export { auth, user, post };