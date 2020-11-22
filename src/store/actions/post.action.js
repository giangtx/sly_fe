import { actionCreator, post } from "./actionType";
import postServices from "../../service/post.service";

export const getPostByUserName = (username, size, page) => {
  return async (dispatch) => {
    dispatch(actionCreator(post.GET_POST_BY_USERNAME));
    return postServices
      .getPostByUserName(username, size, page)
      .then((result) => {
        if (result.status === 404) {
          dispatch(
            actionCreator(post.GET_POST_BY_USERNAME_FAILED, {
              error: "Người dùng không tồn tại",
            })
          );
        } else {
          dispatch(
            actionCreator(post.GET_POST_BY_USERNAME_SUCCESS, result.data)
          );
        }
      })
      .catch((error) => {
        dispatch(
          actionCreator(post.GET_POST_BY_USERNAME_FAILED, {
            error: error.message,
          })
        );
      });
  };
};
