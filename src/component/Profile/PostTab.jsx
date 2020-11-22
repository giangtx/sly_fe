import React, { useEffect } from "react";
import "./css/profile.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Actions from "../../store/actions";
import PostItem from "../Home/PostItem";

const PostTab = ({
  username,
  posts,
  getSuccess,
  getFailed,
  getError,
  getPostByUserName,
}) => {
  useEffect(() => {
    getPostByUserName(username, 10, 1);
  }, []);
  return (
    <>
      <PostItem></PostItem>
      <PostItem></PostItem>
    </>
  );
};
const mapStateToProps = (state) => ({
  posts: state.post.posts,
  getSuccess: state.user.getByUsernameSuccessState,
  getFailed: state.user.getByUsernameFailedState,
  getError: state.user.getByUsernameErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  getPostByUserName: (username, size, page) =>
    dispatch(Actions.getPostByUserName(username, size, page)),
});

PostTab.defaultProps = {
  posts: null,
  getError: { error: "" },
};

PostTab.propTypes = {
  getPostByUserName: PropTypes.func.isRequired,
  posts: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  getSuccess: PropTypes.bool.isRequired,
  getFailed: PropTypes.bool.isRequired,
  getError: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};
export default connect(mapStateToProps, mapDispatchToProps)(PostTab);
