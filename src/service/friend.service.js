import { getApi, postApi } from "../utils/ApiUtils";

class friendServices {
  getFriend = async (size = 10, page = 1) => {
    return getApi(`/friend/user?size=${size}&page=${page}`);
  };
  getNotFriend = async (size = 10, page = 1) => {
    return getApi(`/friend/not?size=${size}&page=${page}`);
  };
  getApproval = async (size = 10, page = 1) => {
    return getApi(`/friend/approval?size=${size}&page=${page}`);
  };
  addFriend = async (id) => {
    return postApi(`/friend/add/${id}`, {});
  };
  approvalFriend = async (friend, isApproval) => {
    return postApi(`/friend/approval`, { friend, isApproval });
  };
}
export default new friendServices();
