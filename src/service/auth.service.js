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
}
export default new AuthServices();