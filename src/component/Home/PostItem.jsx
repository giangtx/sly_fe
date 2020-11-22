import React from "react";
import { Link } from "react-router-dom";
import "./css/postItem.css"

const PostItem = () => {
  return (
    <>
      <div className="froum-content">
        <div className="header-avatar-froum">
          <div className="avatar-froum-div" style={{ padding: "0px" }}>
            <img
              className="avatar-froum"
              src="/image/avatar/DSC02249.jpg"
              alt=""
            />
          </div>
          <div>
            <Link to="/slytherin/profile/slytherin" style={{ fontWeight: "500" }}>
              Slytherin
            </Link>
            <br />
            <span style={{ fontSize: "15px" }}>Ngày đăng: 13/6/2020</span>
          </div>
        </div>
        <div>
          <Link to="/Slytherin/hinhanh/" title="">
            <img
              className="image-froum"
              src="/image/resize/image11-min.jpg"
              alt=""
            />
          </Link>
        </div>
        <div className="describe-image">
          <span>Gió đưa cây cải về trời</span>
          <span>Rau răm ở lại chịu đời đắng cay</span>
        </div>
        <div
          className="row"
          style={{ paddingLeft: "15px", paddingRight: "15px", paddingBottom: "10px" }}
        >
          <div className="icon-like col-lg-6">
            <button className="like-button-post">
              <img src="/image/icon/like-like.png" alt="" />
            </button>
            <span>1000</span>
          </div>
          <div
            className="col-lg-6"
            align="right"
            style={{ paddingTop: "15px" }}
          >
            <span>100 bình luận</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostItem;
