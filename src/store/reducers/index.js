import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";
import { userReducer } from "./user.reducer";
import { postReducer } from "./post.reducer";
import { commentReducer } from "./comment.reducer";
import { friendReducer } from "./friend.reducer";

const reducer = () => 
  combineReducers({
    auth: authReducer,
    user: userReducer,
    post: postReducer,
    comment: commentReducer,
    friend: friendReducer,
  });

export default reducer;
