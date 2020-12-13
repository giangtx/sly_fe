import { actionCreator, group } from "./actionType";
import groupServices from "../../service/group.service";

export const getUserGroupAction = (size, page, search) => {
  return async (dispatch) => {
    dispatch(actionCreator(group.GET_USER_GROUP));
    return groupServices
      .getUserGroup(size, page, search)
      .then((result) => {
        dispatch(actionCreator(group.GET_USER_GROUP_SUCCESS, result.data));
      })
      .catch((error) => {
        dispatch(
          actionCreator(group.GET_USER_GROUP_FAILED, {
            error: error.message,
          })
        );
      });
  };
};
export const getOtherGroupAction = (size, page, search) => {
  return async (dispatch) => {
    dispatch(actionCreator(group.GET_OTHER_GROUP));
    return groupServices
      .getOtherGroup(size, page, search)
      .then((result) => {
        dispatch(actionCreator(group.GET_OTHER_GROUP_SUCCESS, result.data));
      })
      .catch((error) => {
        dispatch(
          actionCreator(group.GET_OTHER_GROUP_FAILED, {
            error: error.message,
          })
        );
      });
  };
};
export const joinGroupAction = (id) => {
  return async (dispatch) => {
    dispatch(actionCreator(group.JOIN_GROUP));
    return groupServices.joinGroup(id)
  }
}
export const getGroupByIdAction = (id) => {
  return async (dispatch) => {
    dispatch(actionCreator(group.GET_GROUP_BY_ID));
    return groupServices
      .getGroupById(id)
      .then((result) => {
        if (result.status === 404) {
          dispatch(
            actionCreator(group.GET_GROUP_BY_ID_FAILED, {
              error: "Bài viết không tồn tại",
            })
          );
        } else {
          dispatch(
            actionCreator(group.GET_GROUP_BY_ID_SUCCESS, result.data)
          );
        }
      })
      .catch((error) => {
        dispatch(
          actionCreator(group.GET_GROUP_BY_ID_FAILED, {
            error: error.message,
          })
        );
      });
  };
};