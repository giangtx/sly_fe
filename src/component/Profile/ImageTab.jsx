import React, { useEffect } from "react";
import "./css/profile.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Actions from "../../store/actions";

const ImageTab = ({
  username,
  listImage,
  getSuccess,
  getFailed,
  getError,
  getImageByUserName,
}) => {
  useEffect(() => {
    getImageByUserName(username)
  }, []);
  console.log(listImage)
  const lists = listImage.map((image, index) => {
    return (
      <div className="col-lg-4" key={index} style={{ padding: "0px" }}>
        <div className="image-item-div-profile" style={{ padding: "0px" }}>
          <img
            className="image-item-profile"
            src={
              image.type === 1
                ? `http://localhost:3013/user/image/${image.name}`
                : `http://localhost:3013/post/image/${image.name}`
            }
            alt=""
          />
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="div-introduction-profile-page">
        <span className="image-profile-page">
          <span>
            <i className="fas fa-image"></i>
          </span>{" "}
          Hình ảnh
        </span>
        <div className="row" style={{ padding: "10px", paddingBottom: "0px" }}>
          {lists}
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  listImage: state.user.listImage,
  getSuccess: state.user.getImageByUsernameSuccessState,
  getFailed: state.user.getImageByUsernameFailedState,
  getError: state.user.getImageByUsernameErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  getImageByUserName: (username) =>
    dispatch(Actions.getImageByUserName(username)),
});

ImageTab.defaultProps = {
  listImage: [],
  getError: { error: "" },
};

ImageTab.propTypes = {
  getImageByUserName: PropTypes.func.isRequired,
  listImage: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  getSuccess: PropTypes.bool.isRequired,
  getFailed: PropTypes.bool.isRequired,
  getError: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};
export default connect(mapStateToProps, mapDispatchToProps)(ImageTab);
