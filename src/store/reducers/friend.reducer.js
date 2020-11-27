import { friend } from "../actions/actionType";

const friendInitialState = {
  friends: [],
  size: 0,
  currentPage: 0,
  totalPage: 0,
  //get friend
  getFriendPendingState: false,
  getFriendFailedState: false,
  getFriendSuccessState: false,
  getFriendErrorMessage: null,
  //get not friend
  getNotFriendPendingState: false,
  getNotFriendFailedState: false,
  getNotFriendSuccessState: false,
  getNotFriendErrorMessage: null,
  // get approval friends
  getApprovalFriendPendingState: false,
  getApprovalFriendFailedState: false,
  getApprovalFriendSuccessState: false,
  getApprovalFriendErrorMessage: null,
};

function friendReducer(state = friendInitialState, action) {
  const { payload, type } = action;
  switch (type) {
    case friend.GET_FRIEND:
      return {
        ...state,
        getFriendPendingState: true,
      };
    case friend.GET_FRIEND_SUCCESS:
      return {
        ...state,
        getFriendPendingState: false,
        getFriendFailedState: false,
        getFriendErrorMessage: null,
        getFriendSuccessState: true,
        friends: payload.data,
        size: parseInt(payload.size),
        currentPage: parseInt(payload.currentPage),
        totalPage: parseInt(payload.totalpage),
      };
    case friend.GET_FRIEND_FAILED:
      return {
        ...state,
        getFriendPendingState: false,
        getFriendSuccessState: false,
        getFriendFailedState: true,
        getFriendErrorMessage: payload,
        friends: [],
      };
    case friend.GET_NOT_FRIEND:
      return {
        ...state,
        getNotFriendPendingState: true,
      };
    case friend.GET_NOT_FRIEND_SUCCESS:
      return {
        ...state,
        getNotFriendPendingState: false,
        getNotFriendFailedState: false,
        getNotFriendErrorMessage: null,
        getNotFriendSuccessState: true,
        friends: payload.data,
        size: parseInt(payload.size),
        currentPage: parseInt(payload.currentPage),
        totalPage: parseInt(payload.totalpage),
      };
    case friend.GET_NOT_FRIEND_FAILED:
      return {
        ...state,
        getNotFriendPendingState: false,
        getNotFriendSuccessState: false,
        getNotFriendFailedState: true,
        getNotFriendErrorMessage: payload,
        friends: [],
      };
    case friend.GET_APPROVAL_FRIEND:
      return {
        ...state,
        getApprovalFriendPendingState: true,
      };
    case friend.GET_APPROVAL_FRIEND_SUCCESS:
      return {
        ...state,
        getApprovalFriendPendingState: false,
        getApprovalFriendFailedState: false,
        getApprovalFriendErrorMessage: null,
        getApprovalFriendSuccessState: true,
        friends: payload.data,
        size: parseInt(payload.size),
        currentPage: parseInt(payload.currentPage),
        totalPage: parseInt(payload.totalpage),
      };
    case friend.GET_APPROVAL_FRIEND_FAILED:
      return {
        ...state,
        getApprovalFriendPendingState: false,
        getApprovalFriendSuccessState: false,
        getApprovalFriendFailedState: true,
        getApprovalFriendErrorMessage: payload,
        friends: [],
      };
    default:
      return state;
  }
}

export { friendReducer };
