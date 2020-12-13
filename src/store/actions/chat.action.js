import { actionCreator, chat } from "./actionType";
import chatServices from "../../service/chat.service";

export const getChatByUserAction = (size, page) => {
  return async (dispatch) => {
    dispatch(actionCreator(chat.GET_CHAT_BY_USER));
    return chatServices
      .getChatByUser(size, page)
      .then((result) => {
        dispatch(actionCreator(chat.GET_CHAT_BY_USER_SUCCESS, result.data));
      })
      .catch((error) => {
        dispatch(
          actionCreator(chat.GET_CHAT_BY_USER_FAILED, {
            error: error.message,
          })
        );
      });
  };
};