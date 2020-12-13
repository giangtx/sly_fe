import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";
import { userReducer } from "./user.reducer";
import { postReducer } from "./post.reducer";
import { commentReducer } from "./comment.reducer";
import { friendReducer } from "./friend.reducer";
import { chatReducer } from "./chat.reducer";
import { messageReducer } from "./message.reducer";
import { groupReducer } from "./group.reducer";

const reducer = () =>
  combineReducers({
    auth: authReducer,
    user: userReducer,
    post: postReducer,
    comment: commentReducer,
    friend: friendReducer,
    chat: chatReducer,
    message: messageReducer,
    group: groupReducer,
  });

export default reducer;
