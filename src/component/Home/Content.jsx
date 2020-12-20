import React, { useEffect }from "react";
import PostItem from "./PostItem";
import PostForm from "./PostForm";
import "./css/content.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Actions from "../../store/actions";

const Content = ({
  posts,
  getSuccess,
  getFailed,
  getError,
  getPostHome,
  size,
  currentPage,
  totalPage,
}) => {
  useEffect(() => {
    getPostHome(20, 1);
  }, []);
  const list = posts.map((post, index) => {
    return (
      <PostItem
        id={post.id}
        content={post.content}
        likes={post.likes}
        comments={post.comments}
        userId={post.user.id}
        username={post.user.username}
        avatar={post.user.avatar}
        statusLike={post.like.length > 0 ? true : false}
        images={post.images}
        createdAt={post.createdAt}
        groupuser={post.groupuser}
        key={index}
      />
    );
  });
  return (
    <>
      <div className="col-lg-8">
        <PostForm></PostForm>
        {list}
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  posts: state.post.posts,
  getSuccess: state.post.getPostHomeSuccessState,
  getFailed: state.post.getPostHomeFailedState,
  getError: state.post.getPostHomeErrorMessage,
  size: state.post.size,
  currentPage: state.post.currentPage,
  totalPage: state.post.totalPage,
});

const mapDispatchToProps = (dispatch) => ({
  getPostHome: (sizeP, pageP) => dispatch(Actions.getPostHome(sizeP, pageP)),
});

Content.defaultProps = {
  posts: [],
  getError: { error: "" },
  size: 0,
  currentPage: 0,
  totalPage: 0,
};

Content.propTypes = {
  getPostHome: PropTypes.func.isRequired,
  posts: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  getSuccess: PropTypes.bool.isRequired,
  getFailed: PropTypes.bool.isRequired,
  getError: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  size: PropTypes.number,
  currentPage: PropTypes.number,
  totalPage: PropTypes.number,
};
export default connect(mapStateToProps, mapDispatchToProps)(Content);
