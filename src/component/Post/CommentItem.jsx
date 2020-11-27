import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { prettyDate } from "../../utils/formatDate";

const CommentItem = ({ id, username, content, avatar, createdAt }) => {
  return (
    <>
      <div className="post-comment-detail">
        <div>
          <div className="avatar-form-home-div" style={{ padding: "0px" }}>
            <img
              className="avatar-form-home"
              src={`http://localhost:3013/user/image/${avatar}`}
              alt=""
            />
          </div>
        </div>
        <div className="div-form-home-textarea">
          <Link to={`/slytherin/profile/${username}`} title="">
            <span>{username}</span>
          </Link>
          <span className="comment-time-detail">{prettyDate(createdAt)}</span>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
};
CommentItem.defaultProps = {
  id: 0,
  content: "",
  username: "",
  avatar: "",
  createdAt: "2020-02-02",
};
CommentItem.propTypes = {
  id: PropTypes.number,
  content: PropTypes.string,
  username: PropTypes.string,
  avatar: PropTypes.string,
  createdAt: PropTypes.string,
};
export default CommentItem;
