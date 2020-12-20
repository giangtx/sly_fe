import React, { useState, useEffect } from "react";
import RightBar from "../Home/RightBar";
import LeftBar from "../Home/LeftBar";
import "./css/admin.css";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Actions from "../../store/actions";
import UserTab from "./UserTab";
import PostTab from "./PostTab";
import BlockTab from "./BlockTab";

const Admin = ({
  users,
  size,
  currentPage,
  totalPage,
  posts,
  sizePost,
  currentPagePost,
  totalPagePost,
  getAllActive,
  getBlock,
  getAdminPost,
}) => {
  const [search, setSearch] = useState("");
  const params = useParams();
  let list = null;
  useEffect(() => {
    list = null;
    if (params.type === "user") {
      getAllActive(10, 1, "");
    }
    if (params.type === "block") {
      getBlock(10, 1, "");
    }
    if (params.type === "post") {
      getAdminPost(10, 1);
    }
  }, [params.type]);
  console.log(posts);
  if (params.type === "user") {
    list = users.map((user, index) => {
      return (
        <UserTab
          key={index}
          id={user.id}
          avatar={user.avatar}
          username={user.username}
          description={user.description}
        />
      );
    });
  }
  if (params.type === "block") {
    list = users.map((user, index) => {
      return (
        <BlockTab
          key={index}
          id={user.id}
          avatar={user.avatar}
          username={user.username}
          description={user.description}
        />
      );
    });
  }
  if (params.type === "post") {
    list = posts.map((post, index) => {
      return (
        <PostTab
          id={post.id}
          content={post.content}
          likes={post.likes}
          comments={post.comments}
          user={post.user}
          like={post.like}
          images={post.images}
          createdAt={post.createdAt}
          key={index}
        />
      );
    });
  }
  const searchHandle = () => {
    if (params.type === "user") {
      getAllActive(10, 1, search);
    }
    if (params.type === "block") {
      getBlock(10, 1, search);
    }
  };
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
                    <div className="friend-header">
                      <div
                        className="friend-header-text-friend"
                        style={{ width: "170px" }}
                      >
                        <Link
                          to="/slytherin/admin/user"
                          className={`${
                            params.type === "user" ? "active-header-friend" : ""
                          }`}
                        >
                          Người dùng
                        </Link>
                      </div>
                      <div
                        className="friend-header-text-friend"
                        style={{ width: "135px" }}
                      >
                        <Link
                          to="/slytherin/admin/block"
                          className={`${
                            params.type === "block"
                              ? "active-header-friend"
                              : ""
                          }`}
                        >
                          Mở khóa
                        </Link>
                      </div>
                      <div className="friend-header-text-app">
                        <Link
                          to="/slytherin/admin/post"
                          className={`${
                            params.type === "post" ? "active-header-friend" : ""
                          }`}
                        >
                          Bài viết
                        </Link>
                      </div>
                      <label className="label_search_chatbox-home">
                        <input
                          className="search_chatbox"
                          type="text"
                          placeholder="Tìm kiếm"
                          onChange={(e) => {
                            setSearch(e.target.value);
                          }}
                          onKeyPress={(event) =>
                            event.key === "Enter" ? searchHandle(event) : null
                          }
                        ></input>
                      </label>
                    </div>
                    <div className="friend-content">
                      <div className="row">{list}</div>
                    </div>
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
  users: state.user.users,
  size: state.user.size,
  currentPage: state.user.currentPage,
  totalPage: state.user.totalPage,
  posts: state.post.posts,
  sizePost: state.post.size,
  currentPagePost: state.post.currentPage,
  totalPagePost: state.post.totalPage,
});

const mapDispatchToProps = (dispatch) => ({
  getAllActive: (sizeP, pageP, searchP) =>
    dispatch(Actions.getAllActiveAction(sizeP, pageP, searchP)),
  getBlock: (sizeP, pageP, searchP) =>
    dispatch(Actions.getUserBlockAction(sizeP, pageP, searchP)),
  getAdminPost: (sizeP, pageP) =>
    dispatch(Actions.getPostAdminAction(sizeP, pageP)),
});

Admin.defaultProps = {
  users: [],
  size: 0,
  currentPage: 0,
  totalPage: 0,
  posts: [],
  sizePost: 0,
  currentPagePost: 0,
  totalPagePost: 0,
};

Admin.propTypes = {
  getAllActive: PropTypes.func.isRequired,
  getBlock: PropTypes.func.isRequired,
  getAdminPost: PropTypes.func.isRequired,
  users: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  size: PropTypes.number,
  currentPage: PropTypes.number,
  totalPage: PropTypes.number,
  posts: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  sizePost: PropTypes.number,
  currentPagePost: PropTypes.number,
  totalPagePost: PropTypes.number,
};
export default connect(mapStateToProps, mapDispatchToProps)(Admin);
