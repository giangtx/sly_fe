import { actionCreator, post } from "./actionType";
import postServices from "../../service/post.service";

export const getPostHome = (size, page) => {
  return async (dispatch) => {
    dispatch(actionCreator(post.GET_POST_HOME));
    return postServices
      .getPostHome(size, page)
      .then((result) => {
        if (result.status === 404) {
          dispatch(
            actionCreator(post.GET_POST_HOME_FAILED, {
              error: "Người dùng không tồn tại",
            })
          );
        } else {
          dispatch(
            actionCreator(post.GET_POST_HOME_SUCCESS, result.data)
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
export const createPostAction = (content, type, idGroup, isFile, file) => {
  return async (dispatch) => {
    dispatch(actionCreator(post.CREATE_POST));
    return postServices
      .createPost(content, type, idGroup)
      .then((result) => {
        if(isFile) {
          postServices.uploadImagePost(result.data.id, file)
          .then((res)=>{
            dispatch(actionCreator(post.CREATE_POST_SUCCESS, res.data))
          })
        } else {
          dispatch(actionCreator(post.CREATE_POST_SUCCESS, result.data))
        }
      })
      .catch((error) => {
        dispatch(
          actionCreator(post.CREATE_POST_FAILED, {
            error: error.message,
          })
        );
      });
  };
};
export const getOnePostByIdAction = (id) => {
  return async (dispatch) => {
    dispatch(actionCreator(post.GET_ONE_BY_ID));
    return postServices
      .getOneById(id)
      .then((result) => {
        if (result.status === 404) {
          dispatch(
            actionCreator(post.GET_ONE_BY_ID_FAILED, {
              error: "Bài viết không tồn tại",
            })
          );
        } else {
          dispatch(
            actionCreator(post.GET_ONE_BY_ID_SUCCESS, result.data)
          );
        }
      })
      .catch((error) => {
        dispatch(
          actionCreator(post.GET_ONE_BY_ID_FAILED, {
            error: error.message,
          })
        );
      });
  };
};
export const likeAction = (id) => {
  return async (dispatch) => {
    dispatch(actionCreator(post.LIKE_HANDLE));
    return postServices
      .likeHandle(id)
      .then((result) => {
        dispatch(getOnePostByIdAction(id))
      })
  };
};
export const getPostByGroupAction = (id, size, page) => {
  return async (dispatch) => {
    dispatch(actionCreator(post.GET_POST_BY_GROUP));
    return postServices
      .getPostByGroup(id, size, page)
      .then((result) => {
        if (result.status === 404) {
          dispatch(
            actionCreator(post.GET_POST_BY_GROUP_FAILED, {
              error: "Nhóm không tồn tại",
            })
          );
        } else {
          dispatch(
            actionCreator(post.GET_POST_BY_GROUP_SUCCESS, result.data)
          );
        }
      })
      .catch((error) => {
        dispatch(
          actionCreator(post.GET_POST_BY_GROUP_FAILED, {
            error: error.message,
          })
        );
      });
  };
};