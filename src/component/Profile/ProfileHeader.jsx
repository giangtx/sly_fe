import React, { useState, useEffect } from "react";
import "./css/profile.css";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import ChangeAvatar from "./ChangeAvatar";
import ChangeCover from "./ChangeCover";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import vi from "date-fns/locale/vi";
import { connect } from "react-redux";
import Actions from "../../store/actions";

registerLocale("vi", vi);

const ProfileHeader = ({
  owner,
  params,
  id,
  firstname,
  lastname,
  username,
  avatar,
  coverImage,
  description,
  address,
  gender,
  birthday,
  updateUser,
}) => {
  const [newBirthday, setNewBirthday] = useState(new Date(birthday));
  const [newDes, setNewDes] = useState(description);
  const [newAddress, setNewAddress] = useState(address);
  const [newGender, setNewGender] = useState(gender);
  const [newFirst, setNewFirst] = useState(firstname);
  const [newLast, setNewLast] = useState(lastname);

  const [show, setShow] = useState(false);
  const [showCover, setShowCover] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [rows, setRows] = useState(2);

  useEffect(() => {
    setNewBirthday(new Date(birthday));
    setNewDes(description);
    setNewAddress(address);
    setNewGender(gender);
    setNewFirst(firstname);
    setNewLast(lastname);
  }, [birthday, description, address, gender, firstname, lastname]);

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
    setNewDes(event.target.value);
  };

  const handleClose = () => {
    setShow(false);
  };
  const handleCloseCover = () => {
    setShowCover(false);
  };
  const handleCloseEdit = () => {
    setShowEdit(false);
  };
  const handleChangeAvatar = () => {
    if (owner === params.username) {
      setShow(true);
    }
  };
  const handleChangeCover = () => {
    if (owner === params.username) {
      setShowCover(true);
    }
  };
  useEffect(() => {
    setShow(false);
  }, [avatar]);
  useEffect(() => {
    setShowCover(false);
  }, [coverImage]);
  const handleEditUser = () => {
    updateUser(newFirst, newLast, newBirthday, newGender, newAddress, newDes)
    // firstname, lastname, birthday, gender, address, description
    setShowEdit(false)
  };
  return (
    <>
      <div className="profile-header">
        <div className="cover-image-profile" style={{ cursor: "pointer" }} onClick={handleChangeCover}>
          <img
            className="image-cover-profile"
            src={`http://localhost:3013/user/image/${coverImage}`}
            alt=""
          />
        </div>
        <div className="profile-header-info">
          <div className="avatar-profile-div" onClick={handleChangeAvatar}>
            <img
              className="avatar-profile-img"
              src={`http://localhost:3013/user/image/${avatar}`}
              alt=""
            />
          </div>
          <div style={{ lineHeight: "20px", paddingBottom: "5px" }}>
            <span className="name-profile-header">{`${lastname} ${firstname}`}</span>
            <div>
              <span className="username-profile-header">@{username}</span>
            </div>
          </div>
          {owner === params.username ? (
            <div style={{ lineHeight: "20px", paddingBottom: "10px" }}>
              <button
                className="btn-profile-header-owner"
                onClick={() => {
                  setShowEdit(true);
                }}
              >
                <i className="fas fa-edit"></i> Chỉnh sửa thông tin
              </button>
            </div>
          ) : (
            <div style={{ lineHeight: "20px", paddingBottom: "10px" }}>
              <button className="btn-profile-header-guest">
                <i className="fas fa-edit"></i> Kết bạn
              </button>
            </div>
          )}
        </div>
      </div>
      <Modal show={show} onHide={handleClose} className="change-avatar-modal">
        <Modal.Header closeButton>
          <span>Cập nhật ảnh đại diện</span>
        </Modal.Header>
        <Modal.Body>
          <ChangeAvatar id={id} avatar={avatar} />
        </Modal.Body>
      </Modal>
      <Modal show={showCover} onHide={handleCloseCover} className="change-avatar-modal">
        <Modal.Header closeButton>
          <span>Cập nhật ảnh bìa</span>
        </Modal.Header>
        <Modal.Body>
          <ChangeCover id={id} coverImage={coverImage} />
        </Modal.Body>
      </Modal>
      <Modal
        show={showEdit}
        onHide={handleCloseEdit}
        className="edit-info-modal"
      >
        <Modal.Header closeButton>
          <span>Cập nhật thông tin người dùng</span>
        </Modal.Header>
        <Modal.Body>
          <div className="edit-profile-div">
            <div className="row">
              <div className="col-lg-6">
                <p>Họ</p>
                <input
                  type="text"
                  defaultValue={firstname}
                  onChange={(e) => {
                    setNewFirst(e.target.value);
                  }}
                ></input>
              </div>
              <div className="col-lg-6">
                <p>Tên</p>
                <input
                  type="text"
                  defaultValue={lastname}
                  onChange={(e) => {
                    setNewLast(e.target.value);
                  }}
                ></input>
              </div>
              <div className="col-lg-12">
                <p>Mô tả</p>
                <textarea
                  className="edit-des-profile-textarea"
                  rows={rows}
                  onChange={handleChange}
                  defaultValue={description}
                />
              </div>
              <div className="col-lg-12">
                <p>Địa chỉ</p>
                <input
                  type="text"
                  defaultValue={address}
                  onChange={(e) => {
                    setNewAddress(e.target.value);
                  }}
                ></input>
              </div>
              <div className="col-lg-6">
                <p>Giới tính</p>
                <Form.Control
                  as="select"
                  defaultValue={gender}
                  className="select-edit-page"
                  onChange={(e) => {
                    setNewGender(e.target.value);
                  }}
                >
                  <option>nam</option>
                  <option>nữ</option>
                </Form.Control>
              </div>
              <div className="col-lg-6">
                <p>Ngày sinh</p>
                <DatePicker
                  locale="vi"
                  onChange={(date) => {
                    setNewBirthday(date);
                  }}
                  selected={newBirthday}
                  adjustDateOnChange
                  showMonthDropdown
                  showYearDropdown
                />
              </div>
              <div className="col-lg-12">
                <div className="btn-edit-profile">
                  <button onClick={handleEditUser}>Lưu</button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
const mapDispatchToProps = (dispatch) => ({
  updateUser: (firstname, lastname, birthday, gender, address, description) =>
    dispatch(
      Actions.updateUserAction(
        firstname,
        lastname,
        birthday,
        gender,
        address,
        description
      )
    ),
});
ProfileHeader.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  username: PropTypes.string,
  avatar: PropTypes.string,
  coverImage: PropTypes.string,
  birthday: PropTypes.string,
  updateUser: PropTypes.func.isRequired,
};
ProfileHeader.defaultProps = {
  firstname: "",
  lastname: "",
  username: "",
  avatar: "",
  coverImage: "",
  birthday: "1990-01-01",
};
export default connect(null, mapDispatchToProps)(ProfileHeader);
