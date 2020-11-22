import { post } from "../actions/actionType";

const postInitialState = {
  //profile
  posts: {},
  getByUsernamePendingState: false,
  getByUsernameFailedState: false,
  getByUsernameSuccessState: false,
  getByUsernameErrorMessage: null,
};

function postReducer(state = postInitialState, action) {
  const { payload, type } = action;
  switch (type) {
    case post.GET_POST_BY_USERNAME:
      return {
        ...state,
        getByUsernamePendingState: true,
      };
    case post.GET_POST_BY_USERNAME_SUCCESS:
      return {
        ...state,
        getByUsernamePendingState: false,
        getByUsernameFailedState: false,
        getByUsernameErrorMessage: null,
        getByUsernameSuccessState: true,
        posts: payload,
      };
    case post.GET_POST_BY_USERNAME_FAILED:
      return {
        ...state,
        getByUsernamePendingState: false,
        getByUsernameSuccessState: false,
        getByUsernameFailedState: true,
        getByUsernameErrorMessage: payload,
        posts: {},
      };
    default:
      return state;
  }
}

export { postReducer };
