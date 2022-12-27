import { getApi } from "../utils/ApiUtils";

class chatServices {
  getChatByUser = async (size = 10, page = 1) => {
    return getApi(`/chat/user?size=${size}&page=${page}`);
  }
}
export default new chatServices();
