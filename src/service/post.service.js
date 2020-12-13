import { getApi, postApi, postForm } from "../utils/ApiUtils";

class postServices {
  getPostHome = async (size, page) => {
    return getApi(`/post?size=${size}&page=${page}`);
  };
  getPostByUserName = async (username, size = 10, page = 1) => {
    return getApi(`/post/user/${username}?size=${size}&page=${page}`);
  };
  createPost = async (content, type, idGroup) => {
    return postApi("/post", { content, type, idGroup });
  };
  uploadImagePost = async (id, data) => {
    return postForm(`/post/upload/${id}`, data);
  }
  getOneById = async (id) => {
    return getApi(`/post/${id}`);
  }
  likeHandle = async (id) => {
    return postApi(`/like/${id}`, {});
  }
  getPostByGroup = async (id, size = 10, page = 1) => {
    return getApi(`/post/group/${id}?size=${size}&page=${page}`)
  }
}
export default new postServices();
