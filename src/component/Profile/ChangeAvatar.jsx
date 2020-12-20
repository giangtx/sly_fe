import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Actions from "../../store/actions";
import PropTypes from "prop-types";

const ChangeAvatar = ({ id, avatar, changeUserAvatar }) => {
  const [file, setFile] = useState();
  const handleChange = () => {
    const formData = new FormData();
    if(file){
      formData.append("file", file[0]);
      changeUserAvatar(formData)
    }
  }
  return (
    <>
      <div>
        <div className="change-avatar-div-item">
          <img
            src={
              file
                ? URL.createObjectURL(file[0])
                : `http://localhost:3013/user/image/${avatar}`
            }
            alt=""
            className="change-avatar-img-item"
          ></img>
        </div>
        <input
          type="file"
          name="file"
          onChange={(event) => {
            setFile(event.target.files);
          }}
        ></input>
        <div className="btn-change-avatar" onClick={handleChange}>
          <button>Cập nhật ảnh đại diện</button>
        </div>
      </div>
    </>
  );
};
const mapDispatchToProps = (dispatch) => ({
  changeUserAvatar: (data) => dispatch(Actions.changeUserAvatarAction(data)),
});
ChangeAvatar.propTypes = {
  changeUserAvatar: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(ChangeAvatar);
