import React, { useEffect } from "react";
import RightBar from "../Home/RightBar";
import LeftBar from "../Home/LeftBar";
import PostItem from "../Home/PostItem";
import GroupHeader from "./GroupHeader";
import GroupForm from "./GroupForm";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Actions from "../../store/actions";
import { Link, useParams } from "react-router-dom";
import "./css/group.css";

const Group = ({ posts, size, currentPage, totalPage, getPostByGroup }) => {
  const params = useParams();
  useEffect(() => {
    getPostByGroup(params.id, 20, 1);
  }, [params.id]);
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
        key={index}
      />
    );
  });
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
                  <div className="col-lg-8">
                    <GroupHeader></GroupHeader>
                    <div className="group-header">
                      <div className="group-header-text">
                        <Link
                          to={`/slytherin/group/${params.id}`}
                          className="active-header-friend"
                        >
                          Thảo luận
                        </Link>
                      </div>
                      <div className="group-header-text">
                        <Link to={`/slytherin/groupmember/${params.id}/mem`}>
                          Thành viên
                        </Link>
                      </div>
                    </div>
                    <GroupForm></GroupForm>
                    {list}
                  </div>
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
  posts: state.post.posts,
  size: state.post.size,
  currentPage: state.post.currentPage,
  totalPage: state.post.totalPage,
});

const mapDispatchToProps = (dispatch) => ({
  getPostByGroup: (idP, sizeP, pageP) =>
    dispatch(Actions.getPostByGroupAction(idP, sizeP, pageP)),
});

Group.defaultProps = {
  posts: [],
  size: 0,
  currentPage: 0,
  totalPage: 0,
};

Group.propTypes = {
  getPostByGroup: PropTypes.func.isRequired,
  posts: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  size: PropTypes.number,
  currentPage: PropTypes.number,
  totalPage: PropTypes.number,
};
export default connect(mapStateToProps, mapDispatchToProps)(Group);
