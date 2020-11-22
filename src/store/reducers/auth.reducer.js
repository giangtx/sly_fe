import { auth } from "../actions/actionType";
import Cookies from "js-cookie";

const authInitialState = {
  //login
  loginPendingState: false,
  loginFailedState: false,
  loginErrorMessage: null,
  loginState: Cookies.get("x-token-user") ? true : false,
  //logout
  logoutPendingState: false,
  logoutSuccessState: false,
  logoutFailedState: false,
  logoutErrorMessage: null,
  //register
  registerPendingState: false,
  registerSuccessState: false,
  registerFailedState: false,
  registerErrorMessage: null,
};

function authReducer(state = authInitialState, action) {
  const { payload, type } = action;
  switch (type) {
    case auth.LOGIN:
      return {
        ...state,
        loginPendingState: true,
      };
    case auth.LOGIN_SUCCESS:
      return {
        ...state,
        loginPendingState: false,
        loginFailedState: false,
        loginErrorMessage: null,
        loginState: true,
      };
    case auth.LOGIN_FAILED:
      return {
        ...state,
        loginPendingState: false,
        loginFailedState: true,
        loginErrorMessage: payload,
        loginState: false,
      };
    case auth.LOGOUT:
      return {
        ...state,
        logoutPendingState: true,
      };
    case auth.LOGOUT_SUCCESS:
      return {
        ...state,
        logoutPendingState: false,
        logoutFailedState: false,
        logoutSuccessState: true,
        logoutErrorMessage: null,
        loginState: false,
      };
    case auth.LOGOUT_FAILED:
      return {
        ...state,
        logoutPendingState: false,
        logoutFailedState: true,
        logoutSuccessState: false,
        logoutErrorMessage: payload,
        loginState: true,
      };
    case auth.REGISTER:
      return {
        ...state,
        registerPendingState: true,
      };
    case auth.REGISTER_SUCCESS:
      return {
        ...state,
        registerPendingState: false,
        registerFailedState: false,
        registerSuccessState: true,
        registerErrorMessage: null,
      };
    case auth.REGISTER_FAILED:
      return {
        ...state,
        registerPendingState: false,
        registerFailedState: true,
        registerSuccessState: false,
        registerErrorMessage: payload,
      };
    default:
      return state;
  }
}

export { authReducer };
