import { chat } from "../actions/actionType";

const chatInitialState = {
  chats: [],
  size: 0,
  currentPage: 0,
  totalPage: 0,
  //get chat by user
  getChatByUserPendingState: false,
  getChatByUserFailedState: false,
  getChatByUserSuccessState: false,
  getChatByUserErrorMessage: null,
};

function chatReducer(state = chatInitialState, action) {
  const { payload, type } = action;
  switch (type) {
    case chat.GET_CHAT_BY_USER:
      return {
        ...state,
        getChatByUserPendingState: true,
      };
    case chat.GET_CHAT_BY_USER_SUCCESS:
      return {
        ...state,
        getChatByUserPendingState: false,
        getChatByUserFailedState: false,
        getChatByUserErrorMessage: null,
        getChatByUserSuccessState: true,
        chats: payload.data,
        size: parseInt(payload.size),
        currentPage: parseInt(payload.currentPage),
        totalPage: parseInt(payload.totalpage),
      };
    case chat.GET_CHAT_BY_USER_FAILED:
      return {
        ...state,
        getChatByUserPendingState: false,
        getChatByUserSuccessState: false,
        getChatByUserFailedState: true,
        getChatByUserErrorMessage: payload,
        chats: [],
      };

    default:
      return state;
  }
}

export { chatReducer };
