import React, { useState } from "react";
import PostItem from "../Home/PostItem";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Actions from "../../store/actions";

const PostTab = ({ id, content,likes, comments, user, like, images, createdAt, deletePost }) => {
  const [isDelete, setIsDelete] = useState(false);
  const handleDelete = () => {
    if (!isDelete) {
      setIsDelete(true);
      deletePost(id);
    }
  };
  return (
    <>
      <div className="col-lg-9">
        <PostItem
          id={id}
          content={content}
          likes={likes}
          comments={comments}
          userId={user.id}
          username={user.username}
          avatar={user.avatar}
          statusLike={like.length > 0 ? true : false}
          images={images}
          createdAt={createdAt}
        />
      </div>
      <div className="col-lg-3">
        <div className="btn-admin-post">
          <button onClick={handleDelete}>{isDelete ? "Đã xóa" : "Xóa"}</button>
        </div>
      </div>
    </>
  );
};
const mapDispatchToProps = (dispatch) => ({
  deletePost: (id) => dispatch(Actions.deletePostAction(id)),
});

PostTab.propTypes = {
  deletePost: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(PostTab);
