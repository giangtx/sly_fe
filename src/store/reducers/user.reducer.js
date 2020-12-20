import { user, auth } from "../actions/actionType";

const userInitialState = {
  //info user
  userInfo: {},
  getInfoPendingState: false,
  getInfoFailedState: false,
  getInfoSuccessState: false,
  getInfoErrorMessage: null,
  //profile
  profile: {},
  getByUsernamePendingState: false,
  getByUsernameFailedState: false,
  getByUsernameSuccessState: false,
  getByUsernameErrorMessage: null,
  //get image by user
  listImage: [],
  getImageByUsernamePendingState: false,
  getImageByUsernameFailedState: false,
  getImageByUsernameSuccessState: false,
  getImageByUsernameErrorMessage: null,
  //users
  users: [],
  size: 0,
  currentPage: 0,
  totalPage: 0,
  // get all user active
  getAllUserActivePendingState: false,
  getAllUserActiveFailedState: false,
  getAllUserActiveSuccessState: false,
  getAllUserActiveErrorMessage: null,
  // get all block user
  getBlockUserPendingState: false,
  getBlockUserFailedState: false,
  getBlockUserSuccessState: false,
  getBlockUserErrorMessage: null,
};

function userReducer(state = userInitialState, action) {
  const { payload, type } = action;
  switch (type) {
    case user.GET_INFO_USER:
      return {
        ...state,
        getInfoPendingState: true,
      };
    case user.GET_INFO_USER_SUCCESS:
      return {
        ...state,
        getInfoPendingState: false,
        getInfoFailedState: false,
        getInfoErrorMessage: null,
        getInfoSuccessState: true,
        userInfo: payload,
      };
    case user.GET_INFO_USER_FAILED:
      return {
        ...state,
        getInfoPendingState: false,
        getInfoSuccessState: false,
        getInfoFailedState: true,
        getInfoErrorMessage: payload,
      };
    case user.GET_PROFILE_BY_USERNAME:
      return {
        ...state,
        getByUsernamePendingState: true,
      };
    case user.GET_PROFILE_BY_USERNAME_SUCCESS:
      return {
        ...state,
        getByUsernamePendingState: false,
        getByUsernameFailedState: false,
        getByUsernameErrorMessage: null,
        getByUsernameSuccessState: true,
        profile: payload,
      };
    case user.GET_PROFILE_BY_USERNAME_FAILED:
      return {
        ...state,
        getByUsernamePendingState: false,
        getByUsernameSuccessState: false,
        getByUsernameFailedState: true,
        getByUsernameErrorMessage: payload,
        profile: {},
      };
    case user.GET_IMAGE_BY_USERNAME:
      return {
        ...state,
        getImageByUsernamePendingState: true,
      };
    case user.GET_IMAGE_BY_USERNAME_SUCCESS:
      return {
        ...state,
        getImageByUsernamePendingState: false,
        getImageByUsernameFailedState: false,
        getImageByUsernameErrorMessage: null,
        getImageByUsernameSuccessState: true,
        listImage: payload,
      };
    case user.GET_IMAGE_BY_USERNAME_FAILED:
      return {
        ...state,
        getImageByUsernamePendingState: false,
        getImageByUsernameSuccessState: false,
        getImageByUsernameFailedState: true,
        getImageByUsernameErrorMessage: payload,
        listImage: [],
      };
    case auth.LOGOUT_SUCCESS:
      return {
        ...state,
        userInfo: null,
      };
    case user.CHANGE_USER_AVATAR_SUCCESS:
      return {
        ...state,
        profile: payload,
      };
    case user.UPDATE_USER_SUCCESS:
      return {
        ...state,
        profile: payload,
      };
    case user.CHANGE_USER_COVER_IMAGE_SUCCESS:
      return {
        ...state,
        profile: payload,
      };
    case user.GET_ALL_ACTIVE:
      return {
        ...state,
        getAllUserActivePendingState: true,
      };
    case user.GET_ALL_ACTIVE_SUCCESS:
      return {
        ...state,
        getAllUserActivePendingState: false,
        getAllUserActiveFailedState: false,
        getAllUserActiveErrorMessage: null,
        getAllUserActiveSuccessState: true,
        users: payload.data,
        size: parseInt(payload.size),
        currentPage: parseInt(payload.currentPage),
        totalPage: parseInt(payload.totalpage),
      };
    case user.GET_ALL_ACTIVE_FAILED:
      return {
        ...state,
        getAllUserActivePendingState: false,
        getAllUserActiveSuccessState: false,
        getAllUserActiveFailedState: true,
        getAllUserActiveErrorMessage: payload,
      };
    case user.GET_BLOCK_USER:
      return {
        ...state,
        getBlockUserPendingState: true,
      };
    case user.GET_BLOCK_USER_SUCCESS:
      return {
        ...state,
        getBlockUserPendingState: false,
        getBlockUserFailedState: false,
        getBlockUserErrorMessage: null,
        getBlockUserSuccessState: true,
        users: payload.data,
        size: parseInt(payload.size),
        currentPage: parseInt(payload.currentPage),
        totalPage: parseInt(payload.totalpage),
      };
    case user.GET_BLOCK_USER_FAILED:
      return {
        ...state,
        getBlockUserPendingState: false,
        getBlockUserSuccessState: false,
        getBlockUserFailedState: true,
        getBlockUserErrorMessage: payload,
      };
    default:
      return state;
  }
}

export { userReducer };
