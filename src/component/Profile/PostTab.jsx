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
  size,
  currentPage,
  totalPage,
}) => {
  useEffect(() => {
    getPostByUserName(username, 20, 1);
  }, []);
  const list = posts.map((post, index)=> {
    return (
      <PostItem
        id={post.id}
        content={post.content}
        likes={post.likes}
        comments={post.comments}
        userId={post.user.id}
        username={post.user.username}
        avatar={post.user.avatar}
        statusLike={post.like.length > 0 ? true: false}
        images={post.images}
        createdAt={post.createdAt}
        key={index}
      />
    )
  })
  return (
    <>
      {list}
    </>
  );
};
const mapStateToProps = (state) => ({
  posts: state.post.posts,
  getSuccess: state.post.getPostByUsernameSuccessState,
  getFailed: state.post.getPostByUsernameFailedState,
  getError: state.post.getPostByUsernameErrorMessage,
  size: state.post.size,
  currentPage: state.post.currentPage,
  totalPage: state.post.totalPage,
});

const mapDispatchToProps = (dispatch) => ({
  getPostByUserName: (username, sizeP, pageP) =>
    dispatch(Actions.getPostByUserName(username, sizeP, pageP)),
});

PostTab.defaultProps = {
  posts: [],
  getError: { error: "" },
  size: 0,
  currentPage: 0,
  totalPage: 0
};

PostTab.propTypes = {
  getPostByUserName: PropTypes.func.isRequired,
  posts: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  getSuccess: PropTypes.bool.isRequired,
  getFailed: PropTypes.bool.isRequired,
  getError: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  size: PropTypes.number,
  currentPage: PropTypes.number,
  totalPage: PropTypes.number,
};
export default connect(mapStateToProps, mapDispatchToProps)(PostTab);
