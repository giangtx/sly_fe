import { getApi } from "../utils/ApiUtils";

class messageServices {
  getMessageByChat = async (id, size = 10, page = 1) => {
    return getApi(`/message/chat/${id}?size=${size}&page=${page}`);
  }
}
export default new messageServices();