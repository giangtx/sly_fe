import { getApi, putForm, putApi, postApi } from "../utils/ApiUtils";

class userServices {
  getInfo = async () => {
    return await getApi("/user/info");
  };
  getByUserName = async (username) => {
    return await getApi(`/user/name/${username}`);
  };
  getImageByUserName = async (username) => {
    return await getApi(`/user/listImage/${username}`);
  };
  changeUserAvatar = async (data) => {
    return putForm(`/user/avatar`, data);
  };
  changeUserCoverImage = async (data) => {
    return putForm(`/user/cover`, data);
  };
  getAllActive = async (size = 10, page = 1, search = "") => {
    return await getApi(`/user/?size=${size}&page=${page}&search=${search}`);
  };
  blockUser = async (id) => {
    return await postApi(`/user/block/${id}`, {});
  }
  unblockUser = async (id) => {
    return await postApi(`/user/unblock/${id}`, {});
  }
  getBlockUser = async (size = 10, page = 1, search = "") => {
    return await getApi(`/user/block/?size=${size}&page=${page}&search=${search}`);
  }
  updateUser = async (
    firstname,
    lastname,
    birthday,
    gender,
    address,
    description
  ) => {
    return putApi("/user/update", {
      firstname,
      lastname,
      birthday,
      gender,
      address,
      description,
    });
  };
}
export default new userServices();
