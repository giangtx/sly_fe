import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { prettyDate } from "../../utils/formatDate";
import PropTypes from "prop-types";
import PostComment from "./PostComment";
import { connect } from "react-redux";
import Actions from "../../store/actions";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Modal from "react-bootstrap/Modal";
import EditPost from "./EditPost";
import DeletePost  from "./DeletePost";

const PostDetail = ({
  id,
  content,
  likes,
  comments,
  userId,
  username,
  avatar,
  statusLike,
  images,
  createdAt,
  likeAction,
  userInfo,
}) => {
  const [gallery, setGallery] = useState(Array);
  const [startGallery, setStartGallery] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  useEffect(() => {
    const imgs = [];
    images.forEach((element) => {
      imgs.push({
        original: `http://localhost:3013/post/image/${element.name}`,
        thumbnail: `http://localhost:3013/post/image/${element.name}`,
        originalClass: "image-original-gallery",
      });
    });
    setGallery(imgs);
  }, [images]);
  const handleShowGallery = (index) => {
    setStartGallery(index);
    setShowGallery(true);
  };
  const handleCloseGallery = () => {
    setShowGallery(false);
  };
  const likeHandle = (id) => {
    likeAction(id);
  };

  return (
    <>
      <div className="col-lg-8">
        <div className="froum-content">
          <div className="header-avatar-froum">
            <div className="avatar-froum-div" style={{ padding: "0px" }}>
              <img
                className="avatar-froum"
                src={`http://localhost:3013/user/image/${avatar}`}
                alt=""
              />
            </div>
            <div>
              <Link
                to={`/slytherin/profile/${username}`}
                style={{
                  fontWeight: "500",
                  fontSize: "18px",
                  textTransform: "capitalize",
                }}
              >
                {username}
              </Link>
              <br />
              <div className="tooltip-post">
                {prettyDate(createdAt)}
                <span className="tooltiptext-post">
                  {new Date(createdAt).toLocaleString()}
                </span>
              </div>
              {/* <span style={{ fontSize: "14px" }}>{prettyDate(createdAt)}</span> */}
            </div>
            {userInfo.username === username && (
              <EditPost 
                id={id}
                content={content}
                images={images}
              />
            )}
            {userInfo.username === username && (
              <DeletePost 
                id={id}
              />
            )}
          </div>
          {images.length === 1 && (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleShowGallery(0);
              }}
            >
              <img
                className="image-froum"
                src={`http://localhost:3013/post/image/${images[0].name}`}
                alt=""
              />
            </div>
          )}
          {images.length === 2 && (
            <div
              className="row"
              style={{ margin: "0px", width: "100%", overflow: "hidden" }}
            >
              <div className="col-lg-6" style={{ padding: "0px" }}>
                <div
                  className="image-post-item"
                  style={{ marginRight: "3px", cursor: "pointer" }}
                  onClick={() => {
                    handleShowGallery(0);
                  }}
                >
                  <img
                    className="image-froum"
                    src={`http://localhost:3013/post/image/${images[0].name}`}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6" style={{ padding: "0px" }}>
                <div
                  className="image-post-item"
                  style={{ marginLeft: "3px", cursor: "pointer" }}
                  onClick={() => {
                    handleShowGallery(1);
                  }}
                >
                  <img
                    className="image-froum"
                    src={`http://localhost:3013/post/image/${images[1].name}`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          )}
          {images.length === 3 && (
            <div
              className="row"
              style={{ margin: "0px", width: "100%", overflow: "hidden" }}
            >
              <div className="col-lg-6" style={{ padding: "0px" }}>
                <div
                  className="image-post-item-left"
                  style={{
                    marginRight: "3px",
                    height: "100%",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleShowGallery(0);
                  }}
                >
                  <img
                    className="image-froum-left"
                    src={`http://localhost:3013/post/image/${images[0].name}`}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6" style={{ padding: "0px" }}>
                <div
                  className="image-post-item"
                  style={{
                    marginLeft: "3px",
                    marginBottom: "3px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleShowGallery(1);
                  }}
                >
                  <img
                    className="image-froum"
                    src={`http://localhost:3013/post/image/${images[1].name}`}
                    alt=""
                  />
                </div>
                <div
                  className="image-post-item"
                  style={{ marginLeft: "3px", cursor: "pointer" }}
                  onClick={() => {
                    handleShowGallery(2);
                  }}
                >
                  <img
                    className="image-froum"
                    src={`http://localhost:3013/post/image/${images[2].name}`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          )}
          {images.length >= 4 && (
            <div
              className="row"
              style={{ margin: "0px", width: "100%", overflow: "hidden" }}
            >
              <div className="col-lg-6" style={{ padding: "0px" }}>
                <div
                  className="image-post-item"
                  style={{ marginBottom: "3px", cursor: "pointer" }}
                  onClick={() => {
                    handleShowGallery(0);
                  }}
                >
                  <img
                    className="image-froum"
                    src={`http://localhost:3013/post/image/${images[0].name}`}
                    alt=""
                  />
                </div>
                <div
                  className="image-post-item"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    handleShowGallery(2);
                  }}
                >
                  <img
                    className="image-froum"
                    src={`http://localhost:3013/post/image/${images[2].name}`}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6" style={{ padding: "0px" }}>
                <div
                  className="image-post-item"
                  style={{
                    marginLeft: "3px",
                    marginBottom: "3px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleShowGallery(1);
                  }}
                >
                  <img
                    className="image-froum"
                    src={`http://localhost:3013/post/image/${images[1].name}`}
                    alt=""
                  />
                </div>
                <div
                  className="image-post-item image-post-last-item"
                  style={{ marginLeft: "3px", cursor: "pointer" }}
                  onClick={() => {
                    handleShowGallery(3);
                  }}
                >
                  <img
                    className="image-froum"
                    src={`http://localhost:3013/post/image/${images[3].name}`}
                    alt=""
                  />
                  {images.length > 4 && (
                    <div className="xt-image-post">+{images.length - 4}</div>
                  )}
                </div>
              </div>
            </div>
          )}
          <div className="describe-image">
            <span>{content}</span>
          </div>
          <div
            className="row"
            style={{
              paddingLeft: "15px",
              paddingRight: "15px",
              paddingBottom: "10px",
            }}
          >
            <div className="icon-like col-lg-6">
              {statusLike ? (
                <button
                  className="like-button-post"
                  onClick={() => likeHandle(id)}
                >
                  <img src="/image/icon/like-like.png" alt="" />
                </button>
              ) : (
                <button
                  className="like-button-post"
                  onClick={() => likeHandle(id)}
                >
                  <img src="/image/icon/like.png" alt="" />
                </button>
              )}
              <span>{likes}</span>
            </div>
            <div
              className="col-lg-6"
              align="right"
              style={{ paddingTop: "15px" }}
            >
              <span>{comments} bình luận</span>
            </div>
            <PostComment id={id}></PostComment>
          </div>
        </div>
      </div>
      <Modal
        className="post-image-gallery"
        show={showGallery}
        onHide={handleCloseGallery}
      >
        <Modal.Body>
          <ImageGallery items={gallery} startIndex={startGallery} />
        </Modal.Body>
      </Modal>
    </>
  );
};
const mapStateToProps = (state) => ({
  userInfo: state.user.userInfo,
});
const mapDispatchToProps = (dispatch) => ({
  likeAction: (sizeP, pageP) => dispatch(Actions.likeAction(sizeP, pageP)),
});
PostDetail.defaultProps = {
  id: 0,
  content: "",
  likes: 0,
  comments: 0,
  userId: 0,
  username: "",
  avatar: "",
  statusLike: false,
  images: [],
  createdAt: "2020-02-02",
  userInfo: null,
};

PostDetail.propTypes = {
  likeAction: PropTypes.func.isRequired,
  userInfo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  images: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  id: PropTypes.number,
  content: PropTypes.string,
  likes: PropTypes.number,
  comments: PropTypes.number,
  userId: PropTypes.number,
  username: PropTypes.string,
  avatar: PropTypes.string,
  statusLike: PropTypes.bool,
  createdAt: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
