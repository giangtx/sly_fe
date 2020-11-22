import React, { useState } from "react";
import "./css/postForm.css";

const PostForm = () => {
  const [value, setValue] = useState("");
  const [rows, setRows] = useState(2);
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
  };
  return (
    <>
      <div className="post-form">
        <div className="post-form-header">
          <span style={{ fontSize: "14px" }}><i className="fas fa-pen"></i></span>
          <span style={{paddingLeft: "8px"}}>{"Tạo bài viết"}</span>
        </div>
        <div className="post-form-content">
          <div>
            <div className="avatar-form-home-div" style={{ padding: "0px" }}>
              <img
                className="avatar-form-home"
                src="/image/avatar/DSC02249.jpg"
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
                <input type="file" className="upload-big-image"></input>
              </div>
            </div>
            <button className="btn-form-home">Đăng</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostForm;
