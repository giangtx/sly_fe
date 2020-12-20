import { postApi } from "../utils/ApiUtils";

class AuthServices {
  login = async (username, password) => {
    return await postApi("/auth/login", { username, password });
  }
  logout = async () => {
    return await postApi("/auth/logout", {});
  }
  register = async (username, password, email) => {
    return await postApi("/auth/register", { username, password, email })
  }
  verifyAccount = async (email, verifyCode) => {
    return await postApi("/user/verify", {email, verifyCode})
  }
}
export default new AuthServices();