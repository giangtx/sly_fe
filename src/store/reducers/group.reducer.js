import { group } from "../actions/actionType";

const groupInitialState = {
  groups: [],
  size: 0,
  page: 0,
  totalPage: 0,
  group: {},
  //get user group
  getUserGroupPendingState: false,
  getUserGroupFailedState: false,
  getUserGroupSuccessState: false,
  getUserGroupErrorMessage: null,
  //get other group
  getOtherGroupPendingState: false,
  getOtherGroupFailedState: false,
  getOtherGroupSuccessState: false,
  getOtherGroupErrorMessage: null,
  //get group by id
  getGroupByIdPendingState: false,
  getGroupByIdFailedState: false,
  getGroupByIdSuccessState: false,
  getGroupByIdErrorMessage: null,
};
function groupReducer(state = groupInitialState, action) {
  const { payload, type } = action;
  switch (type) {
    case group.GET_USER_GROUP:
      return {
        ...state,
        getUserGroupPendingState: true,
      };
    case group.GET_USER_GROUP_SUCCESS:
      return {
        ...state,
        getUserGroupPendingState: false,
        getUserGroupFailedState: false,
        getUserGroupErrorMessage: null,
        getUserGroupSuccessState: true,
        groups: payload.data,
        size: parseInt(payload.size),
        currentPage: parseInt(payload.currentPage),
        totalPage: parseInt(payload.totalpage),
      };
    case group.GET_USER_GROUP_FAILED:
      return {
        ...state,
        getUserGroupPendingState: false,
        getUserGroupSuccessState: false,
        getUserGroupFailedState: true,
        getUserGroupErrorMessage: payload,
        groups: [],
      };
    case group.GET_OTHER_GROUP:
      return {
        ...state,
        getOtherGroupPendingState: true,
      };
    case group.GET_OTHER_GROUP_SUCCESS:
      return {
        ...state,
        getOtherGroupPendingState: false,
        getOtherGroupFailedState: false,
        getOtherGroupErrorMessage: null,
        getOtherGroupSuccessState: true,
        groups: payload.data,
        size: parseInt(payload.size),
        currentPage: parseInt(payload.currentPage),
        totalPage: parseInt(payload.totalpage),
      };
    case group.GET_OTHER_GROUP_FAILEDgetOtherGroup:
      return {
        ...state,
        getOtherGroupPendingState: false,
        getOtherGroupSuccessState: false,
        getOtherGroupFailedState: true,
        getOtherGroupErrorMessage: payload,
        groups: [],
      };
    case group.GET_GROUP_BY_ID:
      return {
        ...state,
        getGroupByIdPendingState: true,
      };
    case group.GET_GROUP_BY_ID_SUCCESS:
      return {
        ...state,
        getGroupByIdPendingState: false,
        getGroupByIdFailedState: false,
        getGroupByIdErrorMessage: null,
        getGroupByIdSuccessState: true,
        group: payload,
      };
    case group.GET_GROUP_BY_ID_FAILED:
      return {
        ...state,
        getGroupByIdPendingState: false,
        getGroupByIdSuccessState: false,
        getGroupByIdFailedState: true,
        getGroupByIdErrorMessage: payload,
        group: null,
      };
    default:
      return state;
  }
}

export { groupReducer };
