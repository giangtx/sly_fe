import { actionCreator, comment } from "./actionType";
import commentServices from "../../service/comment.service";
import { getOnePostByIdAction } from "./post.action";

export const getCommentByIdPostAction = (id, size, page) => {
  return async (dispatch) => {
    dispatch(actionCreator(comment.GET_BY_ID_POST));
    return commentServices
      .getCommentByIdPost(id, size, page)
      .then((result) => {
        if (result.status === 404) {
          dispatch(
            actionCreator(comment.GET_BY_ID_POST_FAILED, {
              error: "Bài viết không tồn tại",
            })
          );
        } else {
          dispatch(actionCreator(comment.GET_BY_ID_POST_SUCCESS, result.data));
        }
      })
      .catch((error) => {
        dispatch(
          actionCreator(comment.GET_BY_ID_POST_FAILED, {
            error: error.message,
          })
        );
      });
  };
};
export const createCommentAction = (id, content) => {
  return async (dispatch) => {
    dispatch(actionCreator(comment.CREATE_COMMENT));
    return commentServices
      .createComment(id, content)
      .then((result) => {
        if (result.status === 404) {
          dispatch(
            actionCreator(comment.CREATE_COMMENT_FAILED, {
              error: "Bài viết không tồn tại",
            })
          );
        } else {
          dispatch(actionCreator(comment.CREATE_COMMENT_SUCCESS, result.data));
          dispatch(getOnePostByIdAction(id))
        }
      })
      .catch((error) => {
        dispatch(
          actionCreator(comment.CREATE_COMMENT_FAILED, {
            error: error.message,
          })
        );
      });
  };
};
