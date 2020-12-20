import { actionCreator, user } from "./actionType";
import userServices from "../../service/user.service";

export const getInfo = (email, password) => {
  return async (dispatch) => {
    dispatch(actionCreator(user.GET_INFO_USER));
    return userServices
      .getInfo()
      .then((result) => {
        if (result.status === 401) {
          dispatch(
            actionCreator(user.GET_INFO_USER_FAILED, {
              error: result.message,
            })
          );
        } else {
          dispatch(actionCreator(user.GET_INFO_USER_SUCCESS, result.data));
        }
      })
      .catch((error) => {
        dispatch(
          actionCreator(user.GET_INFO_USER_FAILED, {
            error: error.message,
          })
        );
      });
  };
};
export const getProfileByUserName = (username) => {
  return async (dispatch) => {
    dispatch(actionCreator(user.GET_PROFILE_BY_USERNAME));
    return userServices
      .getByUserName(username)
      .then((result) => {
        if (result.status === 404) {
          dispatch(
            actionCreator(user.GET_PROFILE_BY_USERNAME_FAILED, {
              error: "Người dùng không tồn tại",
            })
          );
        } else {
          dispatch(
            actionCreator(user.GET_PROFILE_BY_USERNAME_SUCCESS, result.data)
          );
        }
      })
      .catch((error) => {
        dispatch(
          actionCreator(user.GET_PROFILE_BY_USERNAME_FAILED, {
            error: error.message,
          })
        );
      });
  };
};
export const getImageByUserName = (username) => {
  return async (dispatch) => {
    dispatch(actionCreator(user.GET_IMAGE_BY_USERNAME));
    return userServices
      .getImageByUserName(username)
      .then((result) => {
        if (result.status === 404) {
          dispatch(
            actionCreator(user.GET_IMAGE_BY_USERNAME_FAILED, {
              error: "Người dùng không tồn tại",
            })
          );
        } else {
          dispatch(
            actionCreator(user.GET_IMAGE_BY_USERNAME_SUCCESS, result.data)
          );
        }
      })
      .catch((error) => {
        dispatch(
          actionCreator(user.GET_IMAGE_BY_USERNAME_FAILED, {
            error: error.message,
          })
        );
      });
  };
};
export const changeUserAvatarAction = (data) => {
  return async (dispatch) => {
    dispatch(actionCreator(user.CHANGE_USER_AVATAR));
    return userServices.changeUserAvatar(data).then((result) => {
      if (result.status === 200) {
        dispatch(actionCreator(user.CHANGE_USER_AVATAR_SUCCESS, result.data));
      }
    });
  };
};
export const changeUserCoverImageAction = (data) => {
  return async (dispatch) => {
    dispatch(actionCreator(user.CHANGE_USER_COVER_IMAGE));
    return userServices.changeUserCoverImage(data).then((result) => {
      if (result.status === 200) {
        dispatch(actionCreator(user.CHANGE_USER_COVER_IMAGE_SUCCESS, result.data));
      }
    });
  };
};
export const updateUserAction = (
  firstname,
  lastname,
  birthday,
  gender,
  address,
  description
) => {
  return async (dispatch) => {
    dispatch(actionCreator(user.UPDATE_USER));
    return userServices
      .updateUser(firstname, lastname, birthday, gender, address, description)
      .then((result) => {
        if (result.status === 200) {
          dispatch(actionCreator(user.UPDATE_USER_SUCCESS, result.data));
        }
      });
  };
};
export const getAllActiveAction = (size, page, search) => {
  return async (dispatch) => {
    dispatch(actionCreator(user.GET_ALL_ACTIVE));
    return userServices
      .getAllActive(size, page, search)
      .then((result) => {
        if (result.status === 200) {
          dispatch(
            actionCreator(user.GET_ALL_ACTIVE_SUCCESS, result.data)
          );
        }
      })
      .catch((error) => {
        dispatch(
          actionCreator(user.GET_ALL_ACTIVE_FAILED, {
            error: error.message,
          })
        );
      });
  };
};
export const getUserBlockAction = (size, page, search) => {
  return async (dispatch) => {
    dispatch(actionCreator(user.GET_BLOCK_USER));
    return userServices
      .getBlockUser(size, page, search)
      .then((result) => {
        if (result.status === 200) {
          dispatch(
            actionCreator(user.GET_BLOCK_USER_SUCCESS, result.data)
          );
        }
      })
      .catch((error) => {
        dispatch(
          actionCreator(user.GET_BLOCK_USER_FAILED, {
            error: error.message,
          })
        );
      });
  };
};
export const blockUserAction = (id) => {
  return async (dispatch) => {
    dispatch(actionCreator(user.BLOCK_USER));
    return userServices.blockUser(id)
  }
}
export const unblockUserAction = (id) => {
  return async (dispatch) => {
    dispatch(actionCreator(user.UNBLOCK_USER));
    return userServices.unblockUser(id)
  }
}