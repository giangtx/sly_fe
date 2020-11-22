import { actionCreator, auth } from './actionType';
import AuthServices from "../../service/auth.service";
import Cookies from 'js-cookie';

export const loginAction = (username, password) => {
  return async (dispatch) => {
    dispatch(actionCreator(auth.LOGIN));
    return AuthServices.login(username, password)
      .then((result) => {
        if (result.status===404) {
          dispatch(
            actionCreator(auth.LOGIN_FAILED, {
              error: "Tài khoản không tồn tại",
            }),
          );
        }
        else if (result.status===401) {
          dispatch(
            actionCreator(auth.LOGIN_FAILED, {
              error: "Mật khẩu sai",
            }),
          );
        }
        else if (result.status===500) {
          dispatch(
            actionCreator(auth.LOGIN_FAILED, {
              error: "Tài khoản chưa được kích hoạt",
            }),
          );
        } else {
          Cookies.set('x-token-user', result.user.username);
          dispatch(actionCreator(auth.LOGIN_SUCCESS, result.data));
        }
      })
      .catch((error) => {
        dispatch(
          actionCreator(auth.LOGIN_FAILED, {
            error: error.message,
          }),
        );
      });
  };
}
export const logoutAction = () => {
  return async (dispatch) => {
    dispatch(actionCreator(auth.LOGIN));
    return AuthServices.logout()
      .then((result) => {
        Cookies.remove('x-token-user');
        dispatch(actionCreator(auth.LOGOUT_SUCCESS));
      })
      .catch((error) => {
        dispatch(
          actionCreator(auth.LOGOUT_FAILED, {
            error: error.message,
          }),
        );
      });
  };
}
export const registerAction = (username, password, email) => {
  return async (dispatch) => {
    dispatch(actionCreator(auth.REGISTER));
    return AuthServices.register(username, password, email)
      .then((result) => {
        if (result.status===401) {
          dispatch(
            actionCreator(auth.REGISTER_FAILED, {
              error: "Tên người dùng đã tồn tại",
            }),
          );
        }
        else if (result.status===402) {
          dispatch(
            actionCreator(auth.REGISTER_FAILED, {
              error: "Email đã tồn tại",
            }),
          );
        } else {
          dispatch(actionCreator(auth.REGISTER_SUCCESS, result.data));
        }
      })
      .catch((error) => {
        dispatch(
          actionCreator(auth.REGISTER_FAILED, {
            error: error.message,
          }),
        );
      });
  };
}