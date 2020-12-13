import { post } from "../actions/actionType";

const postInitialState = {
  post: {},
  posts: [],
  size: 0,
  page: 0,
  totalPage: 0,
  //get post Home
  getPostHomePendingState: false,
  getPostHomeFailedState: false,
  getPostHomeSuccessState: false,
  getPostHomeErrorMessage: null,
  //get post by username
  getPostByPUsernamePendingState: false,
  getPostByUsernameFailedState: false,
  getPostByUsernameSuccessState: false,
  getPostByUsernameErrorMessage: null,
  //create post
  createPostPendingState: false,
  createPostFailedState: false,
  createPostSuccessState: false,
  createPostErrorMessage: null,
  //get one by id
  getOneByIdPendingState: false,
  getOneByIdFailedState: false,
  getOneByIdSuccessState: false,
  getOneByIdErrorMessage: null,
  //get post by group
  getPostByGroupPendingState: false,
  getPostByGroupFailedState: false,
  getPostByGroupSuccessState: false,
  getPostByGroupErrorMessage: null,
};

function postReducer(state = postInitialState, action) {
  const { payload, type } = action;
  switch (type) {
    case post.GET_POST_HOME:
      return {
        ...state,
        getPostHomePendingState: true,
      };
    case post.GET_POST_HOME_SUCCESS:
      return {
        ...state,
        getPostHomePendingState: false,
        getPostHomeFailedState: false,
        getPostHomeErrorMessage: null,
        getPostHomeSuccessState: true,
        posts: payload.data,
        size: parseInt(payload.size),
        currentPage: parseInt(payload.currentPage),
        totalPage: parseInt(payload.totalpage),
      };
    case post.GET_POST_HOME_FAILED:
      return {
        ...state,
        getPostHomePendingState: false,
        getPostHomeSuccessState: false,
        getPostHomeFailedState: true,
        getPostHomeErrorMessage: payload,
        posts: [],
      };
    case post.GET_POST_BY_USERNAME:
      return {
        ...state,
        getPostByUsernamePendingState: true,
      };
    case post.GET_POST_BY_USERNAME_SUCCESS:
      return {
        ...state,
        getPostByUsernamePendingState: false,
        getPostByUsernameFailedState: false,
        getPostByUsernameErrorMessage: null,
        getPostByUsernameSuccessState: true,
        posts: payload.data,
        size: parseInt(payload.size),
        currentPage: parseInt(payload.currentPage),
        totalPage: parseInt(payload.totalpage),
      };
    case post.GET_POST_BY_USERNAME_FAILED:
      return {
        ...state,
        getPostByUsernamePendingState: false,
        getPostByUsernameSuccessState: false,
        getPostByUsernameFailedState: true,
        getPostByUsernameErrorMessage: payload,
        posts: [],
      };
    case post.CREATE_POST:
      return {
        ...state,
        createPostPendingState: true,
      };
    case post.CREATE_POST_SUCCESS:
      return {
        ...state,
        createPostPendingState: false,
        createPostFailedState: false,
        createPostErrorMessage: null,
        createPostSuccessState: true,
        posts: [payload, ...state.posts],
      };
    case post.CREATE_POST_FAILED:
      return {
        ...state,
        createPostPendingState: false,
        createPostSuccessState: false,
        createPostFailedState: true,
        createPostErrorMessage: payload,
      };
    case post.GET_ONE_BY_ID:
      return {
        ...state,
        getOneByIdPendingState: true,
      };
    case post.GET_ONE_BY_ID_SUCCESS:
      return {
        ...state,
        getOneByIdPendingState: false,
        getOneByIdFailedState: false,
        getOneByIdErrorMessage: null,
        getOneByIdSuccessState: true,
        post: payload,
      };
    case post.GET_ONE_BY_ID_FAILED:
      return {
        ...state,
        getOneByIdPendingState: false,
        getOneByIdSuccessState: false,
        getOneByIdFailedState: true,
        getOneByIdErrorMessage: payload,
        post: null,
      };
    case post.GET_POST_BY_GROUP:
      return {
        ...state,
        getPostByGroupPendingState: true,
      };
    case post.GET_POST_BY_GROUP_SUCCESS:
      return {
        ...state,
        getPostByGroupPendingState: false,
        getPostByGroupFailedState: false,
        getPostByGroupErrorMessage: null,
        getPostByGroupSuccessState: true,
        posts: payload.data,
        size: parseInt(payload.size),
        currentPage: parseInt(payload.currentPage),
        totalPage: parseInt(payload.totalpage),
      };
    case post.GET_POST_BY_GROUP_FAILED:
      return {
        ...state,
        getPostByGroupPendingState: false,
        getPostByGroupSuccessState: false,
        getPostByGroupFailedState: true,
        getPostByGroupErrorMessage: payload,
        posts: [],
      };
    default:
      return state;
  }
}

export { postReducer };
