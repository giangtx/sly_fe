import { getApi, postApi } from "../utils/ApiUtils";

class groupServices {
  getUserGroup = async (size = 10, page = 1, search = "") => {
    return await getApi(
      `/group/user?size=${size}&page=${page}&search=${search}`
    );
  };
  getOtherGroup = async (size = 10, page = 1, search = "") => {
    return await getApi(
      `/group/other?size=${size}&page=${page}&search=${search}`
    );
  };
  joinGroup = async (id) => {
    return await postApi(`/group/join/${id}`, {});
  };
  getGroupById = async (id) => {
    return await getApi(`/group/${id}`);
  };
  getMember = async (id, size = 10, page = 1, search = "") => {
    return await getApi(
      `/group/member/${id}?size=${size}&page=${page}&search=${search}`
    );
  };
  getJoin = async (id, size = 10, page = 1, search = "") => {
    return await getApi(
      `/group/join/${id}?size=${size}&page=${page}&search=${search}`
    );
  };
  approvalUserGroup = async (idGroup, idUser, isApproval) => {
    return postApi(`/group/approval`, { idGroup, idUser, isApproval });
  };
  addGroup = async (name, description) => {
    return postApi("/group", { name, description });
  };
}
export default new groupServices();
