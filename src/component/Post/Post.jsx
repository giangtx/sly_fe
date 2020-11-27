import React, { useEffect } from "react";
import "./css/post.css";
import LeftBar from "../Home/LeftBar";
import RightBar from "../Home/RightBar";
import PostDetail from "./PostDetail";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Actions from "../../store/actions";

const Post = ({ post, getSuccess, getFailed, getError, getOnePostById }) => {
  const params = useParams();
  useEffect(() => {
    getOnePostById(params.id);
  }, []);
  return (
    <>
      <div
        className="container-fluid"
        style={{ padding: "0px", paddingTop: "55px" }}
      >
        <div className="row" style={{ margin: "0px" }}>
          <div className="col-lg-9">
            <div id="froum-all">
              <div className="container-fluid" style={{ padding: "0px" }}>
                <div className="row">
                  <LeftBar></LeftBar>
                  <PostDetail
                    id={post.id}
                    content={post.content}
                    likes={post.likes}
                    comments={post.comments}
                    userId={post.user?post.user.id:null}
                    username={post.user?post.user.username:null}
                    avatar={post.user?post.user.avatar:null}
                    statusLike={post.like && post.like.length > 0 ? true : false}
                    images={post.images}
                    createdAt={post.createdAt}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3" style={{ padding: "0px" }}>
            <RightBar></RightBar>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  post: state.post.post,
  getSuccess: state.post.getOneByIdSuccessState,
  getFailed: state.post.getOneByIdFailedState,
  getError: state.post.getOneByIdErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  getOnePostById: (id) => dispatch(Actions.getOnePostByIdAction(id)),
});

Post.defaultProps = {
  post: null,
  getError: { error: "" },
};

Post.propTypes = {
  getOnePostById: PropTypes.func.isRequired,
  post: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  getSuccess: PropTypes.bool.isRequired,
  getFailed: PropTypes.bool.isRequired,
  getError: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};
export default connect(mapStateToProps, mapDispatchToProps)(Post);
