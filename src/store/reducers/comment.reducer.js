import { comment } from "../actions/actionType";

const commentInitialState = {
  comments: [],
  size: 0,
  currentPage: 0,
  totalPage: 0,
  //get comment by id post
  getCommentByIdPostPendingState: false,
  getCommentByIdPostFailedState: false,
  getCommentByIdPostSuccessState: false,
  getCommentByIdPostErrorMessage: null,
  //create comment
  createCommentPendingState: false,
  createCommentFailedState: false,
  createCommentSuccessState: false,
  createCommentErrorMessage: null,
};

function commentReducer(state = commentInitialState, action) {
  const { payload, type } = action;
  switch (type) {
    case comment.GET_BY_ID_POST:
      return {
        ...state,
        getCommentByIdPostPendingState: true,
      };
    case comment.GET_BY_ID_POST_SUCCESS:
      return {
        ...state,
        getCommentByIdPostPendingState: false,
        getCommentByIdPostFailedState: false,
        getCommentByIdPostErrorMessage: null,
        getCommentByIdPostSuccessState: true,
        comments: payload.data,
        size: parseInt(payload.size),
        currentPage: parseInt(payload.currentPage),
        totalPage: parseInt(payload.totalpage),
      };
    case comment.GET_BY_ID_POST_FAILED:
      return {
        ...state,
        getCommentByIdPostPendingState: false,
        getCommentByIdPostSuccessState: false,
        getCommentByIdPostFailedState: true,
        getCommentByIdPostErrorMessage: payload,
        comments: [],
      };
    case comment.CREATE_COMMENT:
      return {
        ...state,
        createCommentPendingState: true,
      };
    case comment.CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        createCommentPendingState: false,
        createCommentFailedState: false,
        createCommentErrorMessage: null,
        createCommentSuccessState: true,
        comments: [...state.comments, payload],
      };
    case comment.CREATE_COMMENT_FAILED:
      return {
        ...state,
        createCommentPendingState: false,
        createCommentSuccessState: false,
        createCommentFailedState: true,
        createCommentErrorMessage: payload,
      };

    default:
      return state;
  }
}

export { commentReducer };
