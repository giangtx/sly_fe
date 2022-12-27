import React, { useState } from "react";
import { connect } from "react-redux";
import Actions from "../../store/actions";
import PropTypes from "prop-types";

const ChangeCover = ({ id, coverImage, changeUserCoverImage }) => {
  const [file, setFile] = useState();
  const handleChange = () => {
    const formData = new FormData();
    if(file){
      formData.append("file", file[0]);
      changeUserCoverImage(formData)
    }
  }
  return (
    <>
      <div>
        <div className="change-avatar-div-item" style={{ borderRadius: "0px"}}>
          <img
            src={
              file
                ? URL.createObjectURL(file[0])
                : `http://localhost:3013/user/image/${coverImage}`
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
          <button>Cập nhật ảnh bìa</button>
        </div>
      </div>
    </>
  );
};
const mapDispatchToProps = (dispatch) => ({
    changeUserCoverImage: (data) => dispatch(Actions.changeUserCoverImageAction(data)),
});
ChangeCover.propTypes = {
  changeUserCoverImage: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(ChangeCover);
