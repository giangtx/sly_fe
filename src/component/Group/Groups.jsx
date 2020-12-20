import React, { useState, useEffect } from "react";
import RightBar from "../Home/RightBar";
import LeftBar from "../Home/LeftBar";
import { Link, useParams } from "react-router-dom";
import "./css/groups.css";
import UserGroupTab from "./UserGroupTab";
import OtherGroupTab from "./OtherGroupTab";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Actions from "../../store/actions";
import Modal from "react-bootstrap/Modal";

const Groups = ({
  groups,
  size,
  currentPage,
  totalPage,
  getUserGroup,
  getOtherGroup,
  addGroup,
}) => {
  const [show, setShow] = useState(false);
  const [rows, setRows] = useState(2);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const params = useParams();
  let list = null;

  useEffect(() => {
    list = null;
    if (params.id === "my") {
      getUserGroup(10, 1, "");
    }
    if (params.id === "add") {
      getOtherGroup(10, 1, "");
    }
  }, [params.id]);
  const handleClose = () => {
    setShow(false);
  };
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
    setRows(currentRows < maxRows ? currentRows : maxRows);
    setDescription(event.target.value);
  };
  const handleAddGroup = () => {
    if (name) {
      addGroup(name, description);
      setShow(false)
    }
  };
  if (params.id === "my") {
    list = groups.map((group, index) => {
      return (
        <UserGroupTab
          key={index}
          id={group.id}
          name={group.name}
          avatar={group.avatar}
        />
      );
    });
  }
  if (params.id === "add") {
    list = groups.map((group, index) => {
      return (
        <OtherGroupTab
          key={index}
          id={group.id}
          name={group.name}
          avatar={group.avatar}
        />
      );
    });
  }
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
                        className="friend-header-text-friend btn-add-group"
                        style={{ width: "180px" }}
                      >
                        <button
                          onClick={() => {
                            setShow(true);
                          }}
                        >
                          Tạo nhóm
                        </button>
                      </div>
                      <div
                        className="friend-header-text-friend"
                        style={{ width: "209px" }}
                      >
                        <Link
                          to="/slytherin/groups/my"
                          className={`${
                            params.id === "my" ? "active-header-friend" : ""
                          }`}
                        >
                          Nhóm của tôi
                        </Link>
                      </div>
                      <div
                        className="friend-header-text-add"
                        style={{ width: "190px" }}
                      >
                        <Link
                          to="/slytherin/groups/add"
                          className={`${
                            params.id === "add" ? "active-header-friend" : ""
                          }`}
                        >
                          Nhóm khác
                        </Link>
                      </div>
                      <label className="label_search_chatbox-home">
                        <input
                          className="search_chatbox"
                          type="text"
                          placeholder="Tìm kiếm"
                        ></input>
                      </label>
                    </div>
                    <div className="friend-content">{list}</div>
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
      <Modal show={show} onHide={handleClose} className="change-avatar-modal">
        <Modal.Header closeButton>
          <span>Tạo nhóm</span>
        </Modal.Header>
        <Modal.Body>
          <div className="edit-profile-div">
            <div className="row">
              <div className="col-lg-12">
                <p>Tên nhóm</p>
                <input
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></input>
              </div>
              <div className="col-lg-12">
                <p>Mô tả</p>
                <textarea
                  className="edit-des-profile-textarea"
                  rows={rows}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-12">
                <div className="btn-edit-profile">
                  <button onClick={handleAddGroup}>Tạo nhóm</button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
const mapStateToProps = (state) => ({
  groups: state.group.groups,
  size: state.group.size,
  currentPage: state.group.currentPage,
  totalPage: state.group.totalPage,
});

const mapDispatchToProps = (dispatch) => ({
  getUserGroup: (sizeP, pageP, searchP) =>
    dispatch(Actions.getUserGroupAction(sizeP, pageP, searchP)),
  getOtherGroup: (sizeP, pageP, searchP) =>
    dispatch(Actions.getOtherGroupAction(sizeP, pageP, searchP)),
  addGroup: (name, description) =>
    dispatch(Actions.addGroupAction(name, description)),
});

Groups.defaultProps = {
  groups: [],
  size: 0,
  currentPage: 0,
  totalPage: 0,
};

Groups.propTypes = {
  getUserGroup: PropTypes.func.isRequired,
  getOtherGroup: PropTypes.func.isRequired,
  addGroup: PropTypes.func.isRequired,
  groups: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  size: PropTypes.number,
  currentPage: PropTypes.number,
  totalPage: PropTypes.number,
};
export default connect(mapStateToProps, mapDispatchToProps)(Groups);
