import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Actions from "../../store/actions";
import { Link, useParams } from "react-router-dom";

const GroupForm = ({
  createPost,
  getSuccess,
  getFailed,
  getError,
  userInfo,
}) => {
  const params = useParams();
  const [content, setContent] = useState("");
  const [value, setValue] = useState("");
  const [rows, setRows] = useState(2);
  const [file, setFile] = useState();
  console.log(params.id)
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
  const handlePost = () => {
    const formData = new FormData();
    let isFile = false;
    if (file) {
      Array.from(Array(file.length), (e, i) => {
        formData.append("file", file[i]);
      });
      isFile = true;
    }
    createPost(content, 3, params.id, isFile, formData);
    setContent("");
    setFile(null);
    isFile = false;
  };
  return (
    <>
      <div className="post-form">
        <div className="post-form-header">
          <span style={{ fontSize: "14px" }}>
            <i className="fas fa-pen"></i>
          </span>
          <span style={{ paddingLeft: "8px" }}>{"Tạo bài viết"}</span>
        </div>
        <div className="post-form-content">
          <div>
            <div className="avatar-form-home-div" style={{ padding: "0px" }}>
              <img
                className="avatar-form-home"
                src={`http://localhost:3013/user/image/${
                  userInfo ? userInfo.avatar : ""
                }`}
                alt=""
              />
            </div>
          </div>
          <div className="div-form-home-textarea">
            <textarea
              className="form-home-textarea"
              rows={rows}
              value={value}
              placeholder={"Bạn đang nghĩ gì."}
              onChange={handleChange}
            />
            <div className="upload-big-image-cover">
              <div className="upload-btn-home">
                <i className="fas fa-image" style={{ fontSize: "25px" }}></i>
                <input
                  type="file"
                  name="file"
                  multiple
                  className="upload-big-image"
                  onChange={(event) => {
                    setFile(event.target.files);
                  }}
                ></input>
              </div>
            </div>
            {file && (
              <div className="post-form-preview-image-parent">
                {Array.from(Array(file.length), (e, i) => {
                  return (
                    <div className="post-form-preview-image-div" key={i}>
                      <img src={URL.createObjectURL(file[i])} alt=""></img>
                    </div>
                  );
                })}
              </div>
            )}
            <button className="btn-form-home" onClick={handlePost}>
              Đăng
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  getSuccess: state.post.createPostSuccessState,
  getFailed: state.post.createPostFailedState,
  getError: state.post.createPostErrorMessage,
  userInfo: state.user.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
  createPost: (content, type, idGroup, isFile, file) =>
    dispatch(Actions.createPostAction(content, type, idGroup, isFile, file)),
});

GroupForm.defaultProps = {
  getError: { error: "" },
  userInfo: null,
};

GroupForm.propTypes = {
  createPost: PropTypes.func.isRequired,
  getSuccess: PropTypes.bool.isRequired,
  getFailed: PropTypes.bool.isRequired,
  getError: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  userInfo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
export default connect(mapStateToProps, mapDispatchToProps)(GroupForm);
