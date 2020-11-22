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
    default:
      return state;
  }
}

export { userReducer };
