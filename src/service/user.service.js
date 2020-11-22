import { getApi } from "../utils/ApiUtils";

class userServices {
  getInfo = async () => {
    return await getApi("/user/info");
  }
  getByUserName = async (username) => {
    return await getApi(`/user/name/${username}`)
  }
  getImageByUserName = async (username) => {
    return await getApi(`/user/listImage/${username}`)
  }
}
export default new userServices();