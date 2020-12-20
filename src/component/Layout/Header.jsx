import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./css/header.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Actions from "../../store/actions";

const Header = ({
  loggedIn,
  userInfo,
  getSuccess,
  getFailed,
  getError,
  getInfo,
  logout,
}) => {
  useEffect(() => {
    getInfo();
  }, []);
  const handleLogout = async () => {
    await logout();
    document.location.href = "/";
  };
  console.log(userInfo)
  return (
    <>
      <div>
        <div id="nav-sticky" className="header-sly">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-2">
                <div className="site-title-header" align="center">
                  <a href="/slytherin">Slytherin</a>
                </div>
              </div>
              <div className="col-lg-7">
                <ul className="nav justify-content-center">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/">
                      Trang chủ
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/slytherin/friend/my">
                      Bạn bè
                    </Link>
                  </li>
                  <li className="nav-item" style={{ width: "350px" }}>
                    <label className="label_search_chatbox-home">
                      <input
                        className="search_chatbox"
                        type="text"
                        placeholder="Tìm kiếm"
                      ></input>
                    </label>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-5 col-sm-3" align="right">
                {userInfo.id ? (
                  <div className="info-user-header">
                    <Link to={`/slytherin/profile/${userInfo.username}`}>
                      <div
                        className="avatar-header-div"
                        style={{ padding: "0px" }}
                      >
                        <img
                          className="avatar-header"
                          src={`http://localhost:3013/user/image/${
                            userInfo.avatar
                          }`}
                          alt=""
                        />
                      </div>
                    </Link>

                    <div className="text-info-header">
                      <Link to={`/slytherin/profile/${userInfo.username}`}>{userInfo.username}</Link>
                      <span onClick={handleLogout}> /Đăng xuất</span>
                    </div>
                  </div>
                ) : (
                  <div className="p-t-logo">
                    <div style={{ paddingLeft: "0px", color: "white" }}>
                      <Link to="/slytherin/login" id="login-top">
                        Đăng nhập
                      </Link>
                    </div>
                    <div style={{ paddingLeft: "0px" }}>
                      <Link
                        to="/slytherin/register"
                        id="login-top"
                        style={{ color: "#ececec" }}
                      >
                        Đăng ký
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  loggedIn: state.auth.loginState,
  userInfo: state.user.userInfo,
  getSuccess: state.user.getInfoSuccessState,
  getFailed: state.user.getInfoFailedState,
  getError: state.user.getInfoErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  getInfo: () => dispatch(Actions.getInfo()),
  logout: () => dispatch(Actions.logoutAction()),
});

Header.defaultProps = {
  userInfo: null,
  getError: { error: "" },
  loggedIn: false,
};

Header.propTypes = {
  getInfo: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  userInfo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  getSuccess: PropTypes.bool.isRequired,
  getFailed: PropTypes.bool.isRequired,
  getError: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
