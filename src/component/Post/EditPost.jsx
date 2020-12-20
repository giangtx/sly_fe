import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Actions from "../../store/actions";

const EditPost = ({ id, content, images, updatePost }) => {
  const [show, setShow] = useState(false);
  const [contentP, setContentP] = useState("");
  const [value, setValue] = useState("");
  const [rows, setRows] = useState(2);
  const [file, setFile] = useState();
  const [target, setTarget] = useState(null);

  useEffect(() => {
    setContentP(content)
  }, [content])
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
    setContentP(event.target.value);
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleRM = (i, id) => {
    images.splice(i, 1)
    setTarget(id)
    console.log(id)
  }
  const editHandle = () => {
    const arr = []
    images.forEach(img=>{
      arr.push(img.id)
    })
    const formData = new FormData();
    let isFile = false;
    if (file) {
      Array.from(Array(file.length), (e, i) => {
        formData.append("file", file[i]);
      });
      isFile = true;
    }
    updatePost(id, contentP, arr, isFile, formData);
    setContentP("");
    setFile(null);
    isFile = false;
    setShow(false)
  }
  return (
    <>
      <div
        className="edit-btn-post-detail"
        onClick={() => {
          setShow(true);
        }}
      >
        Sửa
      </div>
      <Modal show={show} onHide={handleClose} className="edit-info-modal">
        <Modal.Header closeButton>
          <span>Cập nhật bài viết</span>
        </Modal.Header>
        <Modal.Body>
          <div className="post-form">
            <div className="post-form-header">
              <span style={{ fontSize: "14px" }}>
                <i className="fas fa-pen"></i>
              </span>
              <span style={{ paddingLeft: "8px" }}>{"Sửa bài viết"}</span>
            </div>
            <div className="post-form-content">
              <div className="div-form-home-textarea">
                <textarea
                  className="form-home-textarea"
                  rows={rows}
                  defaultValue={content}
                  onChange={handleChange}
                />
                <div className="upload-big-image-cover">
                  <div className="upload-btn-home">
                    <i
                      className="fas fa-image"
                      style={{ fontSize: "25px" }}
                    ></i>
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
                <div className="post-form-preview-image-parent">
                  {images.map((image, i) => {
                    return (
                      <div className={`post-form-preview-image-div img-current-post-edit ${target===image.id?"none-img":""}`} key={i} onClick={()=>{handleRM(i, image.id)}}>
                        <img
                          className="image-froum"
                          src={`http://localhost:3013/post/image/${image.name}`}
                          alt=""
                        />
                        <div className="xt-image-post-edit">x</div>
                      </div>
                    );
                  })}
                  {file && (
                    <>
                      {Array.from(Array(file.length), (e, i) => {
                        return (
                          <div className="post-form-preview-image-div" key={i}>
                            <img
                              src={URL.createObjectURL(file[i])}
                              alt=""
                            ></img>
                          </div>
                        );
                      })}
                    </>
                  )}
                </div>
                <button className="btn-form-home" onClick={editHandle}>Cập nhật</button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
const mapDispatchToProps = (dispatch) => ({
  updatePost: (id, content, images, isFile, file) =>
    dispatch(Actions.updatePostAction(id, content, images, isFile, file)),
  getInfo: () => dispatch(Actions.getInfo()),
});
EditPost.defaultProps = {
  images: [],
};
EditPost.propTypes = {
  updatePost: PropTypes.func.isRequired,
  images: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};
export default connect(null, mapDispatchToProps)(EditPost);
