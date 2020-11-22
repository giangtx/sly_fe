import { getApi } from "../utils/ApiUtils";

class postServices {
  getPostByUserName = async (username, size = 10, page = 1) => {
    return getApi(`/post/user/${username}?size=${size}&page=${page}`);
  };
}
export default new postServices();
