import { actionCreator, user } from './actionType';
import userServices from "../../service/user.service";

export const getInfo = (email, password) => {
  return async (dispatch) => {
    dispatch(actionCreator(user.GET_INFO_USER));
    return userServices.getInfo()
      .then((result) => {
        if (result.status===401){
          dispatch(
            actionCreator(user.GET_INFO_USER_FAILED, {
              error: result.message,
            }),
          );
        } else {
          dispatch(actionCreator(user.GET_INFO_USER_SUCCESS, result.data));
        }
      })
      .catch((error) => {
        dispatch(
          actionCreator(user.GET_INFO_USER_FAILED, {
            error: error.message,
          }),
        );
      });
  };
}
export const getProfileByUserName = (username) => {
  return async (dispatch) => {
    dispatch(actionCreator(user.GET_PROFILE_BY_USERNAME));
    return userServices.getByUserName(username)
      .then((result) => {
        if (result.status===404) {
          dispatch(
            actionCreator(user.GET_PROFILE_BY_USERNAME_FAILED, {
              error: "Người dùng không tồn tại",
            }),
          );
        } else {
          dispatch(actionCreator(user.GET_PROFILE_BY_USERNAME_SUCCESS, result.data));
        }
      })
      .catch((error) => {
        dispatch(
          actionCreator(user.GET_PROFILE_BY_USERNAME_FAILED, {
            error: error.message,
          }),
        );
      });
  };
}
export const getImageByUserName = (username) => {
  return async (dispatch) => {
    dispatch(actionCreator(user.GET_IMAGE_BY_USERNAME));
    return userServices.getImageByUserName(username)
      .then((result) => {
        if (result.status===404) {
          dispatch(
            actionCreator(user.GET_IMAGE_BY_USERNAME_FAILED, {
              error: "Người dùng không tồn tại",
            }),
          );
        } else {
          dispatch(actionCreator(user.GET_IMAGE_BY_USERNAME_SUCCESS, result.data));
        }
      })
      .catch((error) => {
        dispatch(
          actionCreator(user.GET_IMAGE_BY_USERNAME_FAILED, {
            error: error.message,
          }),
        );
      });
  };
}