import { actionCreator, friend } from "./actionType";
import friendServices from "../../service/friend.service";

export const getFriendAction = (size, page) => {
  return async (dispatch) => {
    dispatch(actionCreator(friend.GET_FRIEND));
    return friendServices
      .getFriend(size, page)
      .then((result) => {
        dispatch(actionCreator(friend.GET_FRIEND_SUCCESS, result.data));
      })
      .catch((error) => {
        dispatch(
          actionCreator(friend.GET_FRIEND_FAILED, {
            error: error.message,
          })
        );
      });
  };
};
export const getNotFriendAction = (size, page) => {
  return async (dispatch) => {
    dispatch(actionCreator(friend.GET_NOT_FRIEND));
    return friendServices
      .getNotFriend(size, page)
      .then((result) => {
        dispatch(actionCreator(friend.GET_NOT_FRIEND_SUCCESS, result.data));
      })
      .catch((error) => {
        dispatch(
          actionCreator(friend.GET_NOT_FRIEND_FAILED, {
            error: error.message,
          })
        );
      });
  };
};
export const getApprovalAction = (size, page) => {
  return async (dispatch) => {
    dispatch(actionCreator(friend.GET_APPROVAL_FRIEND));
    return friendServices
      .getApproval(size, page)
      .then((result) => {
        dispatch(actionCreator(friend.GET_APPROVAL_FRIEND_SUCCESS, result.data));
      })
      .catch((error) => {
        dispatch(
          actionCreator(friend.GET_APPROVAL_FRIEND_FAILED, {
            error: error.message,
          })
        );
      });
  };
};
