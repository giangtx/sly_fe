import React, { useState, useEffect } from "react";
import CommentItem from "./CommentItem";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Actions from "../../store/actions";
import { useParams } from "react-router-dom";

const PostComment = ({
  id,
  comments,
  getSuccess,
  getFailed,
  getError,
  getCommentByIdPost,
  size,
  currentPage,
  totalPage,
  createComment,
  userInfo,
  getInfo,
}) => {
  const params = useParams();
  useEffect(() => {
    getCommentByIdPost(params.id, 10, 1);
    getInfo()
  }, []);
  const [value, setValue] = useState("");
  const [rows, setRows] = useState(2);
  const [content, setContent] = useState("")
  const handleChange = (event) => {
    const textareaLineHeight = 24;
    const minRows = 2;
    const maxRows = 10;

    const previousRows = event.target.rows;
    event.target.rows = minRows; // reset number of rows in textarea

    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }
    setValue(event.target.value);
    setRows(currentRows < maxRows ? currentRows : maxRows);
    setContent(event.target.value);
  };
  const lists = comments.map((comment, index) => {
    return (
      <CommentItem
        key={index}
        id={comment.id}
        username={comment.user ? comment.user.username : null}
        content={comment.content}
        avatar={comment.user ? comment.user.avatar:null}
        createdAt={comment.createdAt}
      />
    );
  });
  const handleComment = () => {
    createComment(params.id, content);
    setContent("");
  }
  return (
    <>
      <div className="post-form-detail">
        <div>
          <div className="avatar-form-home-div" style={{ padding: "0px" }}>
            <img
              className="avatar-form-home"
              src={`http://localhost:3013/user/image/${userInfo.avatar}`}
              alt=""
            />
          </div>
        </div>
        <div className="div-form-home-textarea">
          <textarea
            className="form-home-textarea"
            rows={rows}
            value={content}
            placeholder={"Bạn đang nghĩ gì."}
            onChange={handleChange}
          />
        </div>
        <div className="post-form-detail-btn">
          <button className="btn-form-home" onClick={handleComment}>Bình luận</button>
        </div>
      </div>
      {lists}
    </>
  );
};
const mapStateToProps = (state) => ({
  comments: state.comment.comments,
  getSuccess: state.comment.getCommentByIdPostSuccessState,
  getFailed: state.comment.getCommentByIdPostFailedState,
  getError: state.comment.getCommentByIdPostErrorMessage,
  size: state.comment.size,
  currentPage: state.comment.currentPage,
  totalPage: state.comment.totalPage,
  userInfo: state.user.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
  getCommentByIdPost: (username, sizeP, pageP) =>
    dispatch(Actions.getCommentByIdPostAction(username, sizeP, pageP)),
  createComment: (id, content) =>
    dispatch(Actions.createCommentAction(id, content)),
  getInfo: () => dispatch(Actions.getInfo()),
});

PostComment.defaultProps = {
  comments: [],
  getError: { error: "" },
  size: 0,
  currentPage: 0,
  totalPage: 0,
  userInfo: null,
};

PostComment.propTypes = {
  getInfo: PropTypes.func.isRequired,
  userInfo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  getCommentByIdPost: PropTypes.func.isRequired,
  createComment: PropTypes.func.isRequired,
  comments: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  getSuccess: PropTypes.bool.isRequired,
  getFailed: PropTypes.bool.isRequired,
  getError: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  size: PropTypes.number,
  currentPage: PropTypes.number,
  totalPage: PropTypes.number,
};
export default connect(mapStateToProps, mapDispatchToProps)(PostComment);
