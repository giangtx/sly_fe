import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Actions from "../../store/actions";
import { Link } from "react-router-dom";
import "./css/leftbar.css"

const LefttBar = ({ userInfo, getInfo }) => {
  useEffect(() => {
    getInfo();
  }, []);
  return (
    <>
      <div className="col-lg-4">
        <div className="header-left-bar">
          <div className="avatar-froum-div" style={{ padding: "0px" }}>
            <img
              className="avatar-froum"
              src={`http://localhost:3013/user/image/${
                userInfo ? userInfo.avatar : ""
              }`}
              alt=""
            />
          </div>
          <div className="left-bar-info">
            <Link to={`/slytherin/profile/${userInfo ? userInfo.username : ""}`} title="">{userInfo ? userInfo.username : ""}</Link>
            <p>{userInfo ? userInfo.description : ""}</p>
          </div>
        </div>
        <div className="menu-left-bar-tab">
          <div className="item-menu-left-bar-tab">
            <Link>Hồ sơ</Link>
          </div>
          <div className="item-menu-left-bar-tab">
            <Link>Thông báo</Link>
          </div>
          <div className="item-menu-left-bar-tab">
            <Link>Tin nhắn</Link>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  userInfo: state.user.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
  getInfo: () => dispatch(Actions.getInfo()),
});

LefttBar.defaultProps = {
  userInfo: null,
};

LefttBar.propTypes = {
  getInfo: PropTypes.func.isRequired,
  userInfo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default connect(mapStateToProps, mapDispatchToProps)(LefttBar);
