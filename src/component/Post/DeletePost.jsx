import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Actions from "../../store/actions";

const DeletePost = ({ id, deletePost }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleDelete = () => {
    deletePost(id)
    setShow(false)
    window.location = `/slytherin`
  }
  return (
    <>
      <div
        className="edit-btn-post-detail"
        onClick={() => {
          setShow(true);
        }}
        style={{ paddingLeft: "10px" }}
      >
        Xóa
      </div>
      <Modal show={show} onHide={handleClose} className="rm-info-modal">
        <Modal.Header closeButton>
          <span>Xóa bài viết</span>
        </Modal.Header>
        <Modal.Body>
          <div className="row" style={{ padding: "0px 20px" }}>
            <div className="col-lg-6 btn-rm-post">
              <button onClick={handleDelete}>Xóa</button>
            </div>
            <div className="col-lg-6 btn-rm-post-huy" align="right">
              <button onClick={() =>{setShow(false)}}>Hủy</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
const mapDispatchToProps = (dispatch) => ({
  deletePost: (id) => dispatch(Actions.deletePostAction(id)),
});
DeletePost.propTypes = {
  deletePost: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(DeletePost);
