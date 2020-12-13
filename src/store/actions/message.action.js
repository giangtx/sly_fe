import { actionCreator, message } from "./actionType";
import messageServices from "../../service/message.service";

export const getMessageByChatAction = (id, size, page) => {
  return async (dispatch) => {
    dispatch(actionCreator(message.GET_MESSAGE_BY_CHAT));
    return messageServices
      .getMessageByChat(id, size, page)
      .then((result) => {
        dispatch(actionCreator(message.GET_MESSAGE_BY_CHAT_SUCCESS, result.data));
      })
      .catch((error) => {
        dispatch(
          actionCreator(message.GET_MESSAGE_BY_CHAT_FAILED, {
            error: error.message,
          })
        );
      });
  };
};
export const addMessageAction = (response) => {
  return async (dispatch) => dispatch(actionCreator(message.ADD_MESSAGE, response))
}