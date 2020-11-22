import React from "react";
import "./css/profile.css";
import PropTypes from "prop-types";

const General = ({ description, address, gender, birthday }) => {
  return (
    <>
      <div className="div-introduction-profile-page">
        <span className="introduction-profile-page">
          <span>
            <i className="fas fa-address-card"></i>
          </span>{" "}
          Giới thiệu
        </span>
        <div className="profile-body-description">
  <span className="">"{description}"</span>
        </div>
        <div className="profile-body-info">
          <span className="info-profile-page">
            <span className="logo-info-profile-page">
              <i className="fas fa-home"></i>
            </span>{" "}
            Đến từ {address}
          </span>
        </div>
        <div className="profile-body-info">
          <span className="'info'-profile-page">
            <span className="logo-info-profile-page">
              <i className="fas fa-venus-mars"></i>
            </span>{" "}
            Giới tính {gender}
          </span>
        </div>
        <div className="profile-body-info">
          <span className="'info'-profile-page">
            <span className="logo-info-profile-page">
            <i className="fas fa-table"></i>
            </span>{" "}
            Ngày sinh: {birthday}
          </span>
        </div>
        <div className="profile-body-info">
          <span className="info-profile-page">
            <span className="logo-info-profile-page">
              <i className="fas fa-graduation-cap"></i>
            </span>{" "}
            Đã học tại THPT Phùng Khắc Khoan
          </span>
        </div>
        <div className="profile-body-info">
          <span className="info-profile-page">
            <span className="logo-info-profile-page">
              <i className="fas fa-graduation-cap"></i>
            </span>{" "}
            Đang học tại DH thủy lợi
          </span>
        </div>
      </div>
    </>
  );
};
General.defaultProps = {
  description: '',
  address: '',
  gender: '',
  birthday: '',
};
General.propTypes = {
  description: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
};
export default General;
