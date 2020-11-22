import React from "react";
import "./css/profile.css";
import PropTypes from "prop-types";

const ProfileHeader = ({
  owner,
  params,
  firstname,
  lastname,
  username,
  avatar,
  coverImage,
}) => {
  return (
    <>
      <div className="profile-header">
        <div className="cover-image-profile">
          <img
            className="image-cover-profile"
            src={`http://localhost:3013/user/image/${coverImage}`}
            alt=""
          />
        </div>
        <div className="profile-header-info">
          <div className="avatar-profile-div">
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
              <button className="btn-profile-header-owner">
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
    </>
  );
};

ProfileHeader.defaultProps = {
  firstname: '',
  lastname: '',
  username: '',
  avatar: '',
  coverImage: '',
};
ProfileHeader.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
};
export default ProfileHeader;
