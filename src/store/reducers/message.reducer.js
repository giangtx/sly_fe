import { message } from "../actions/actionType";

const messageInitialState = {
  messages: [],
  size: 0,
  currentPage: 0,
  totalPage: 0,
  //get chat by user
  getMessageByChatPendingState: false,
  getMessageByChatFailedState: false,
  getMessageByChatSuccessState: false,
  getMessageByChatErrorMessage: null,
};

function messageReducer(state = messageInitialState, action) {
  const { payload, type } = action;
  switch (type) {
    case message.GET_MESSAGE_BY_CHAT:
      return {
        ...state,
        getMessageByChatPendingState: true,
      };
    case message.GET_MESSAGE_BY_CHAT_SUCCESS:
      return {
        ...state,
        getMessageByChatPendingState: false,
        getMessageByChatFailedState: false,
        getMessageByChatErrorMessage: null,
        getMessageByChatSuccessState: true,
        messages: payload.data,
        size: parseInt(payload.size),
        currentPage: parseInt(payload.currentPage),
        totalPage: parseInt(payload.totalpage),
      };
    case message.GET_MESSAGE_BY_CHAT_FAILED:
      return {
        ...state,
        getMessageByChatPendingState: false,
        getMessageByChatSuccessState: false,
        getMessageByChatFailedState: true,
        getMessageByChatErrorMessage: payload,
        messages: [],
      };
    case message.ADD_MESSAGE:
      let index = state.messages.findIndex((el) => el.id === payload.id);
      if (index === -1)
        return {
          ...state,
          messages: [...state.messages, payload],
        };
      return state;
    default:
      return state;
  }
}

export { messageReducer };
