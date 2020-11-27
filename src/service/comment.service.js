import { getApi, postApi } from "../utils/ApiUtils";

class commentServices {
  getCommentByIdPost = async (id, size = 10, page = 1) => {
    return getApi(`/comment/post/${id}?size=${size}&page=${page}`);
  }
  createComment = async (idPost, content) => {
    return postApi('/comment', { idPost, content});
  }
}
export default new commentServices();
