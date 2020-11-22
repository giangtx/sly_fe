import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./css/login.css";
import { connect } from "react-redux";
import Actions from "../../store/actions";
import PropTypes from "prop-types";

const Login = ({ login, loggedIn, loginPending, loginError }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login(username, password);
  };
  return (
    <>
      {loggedIn ? (
        <Redirect to="/" />
      ) : (
        <div className="padding-login">
          <div className="container-fluid" align="center">
            <div className="row">
              <div className="col-lg-4 col-md-3"></div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="padding-sly"
                  style={{ paddingBottom: "15px", paddingTop: "50px" }}
                >
                  <h1 className="site-title" style={{ fontSize: "65px" }}>
                    <Link to="/slytherin">Slytherin</Link>
                  </h1>
                  <p className="site-tiny">Khám phá thế giới muôn màu</p>
                </div>
                <b style={{ fontSize: "23px" }}>Đăng nhập</b>
                <p style={{ marginBottom: "34px", fontSize: "14px" }}>
                  Mừng bạn quay trở lại.
                </p>
                <Link to="#" style={{ textDecoration: "none" }}>
                  <div className="fb-login">
                    <p id="fb_p"> Facebook </p>
                  </div>
                </Link>
                <p>OR</p>
                <div id="para">
                  <p align="left" style={{ marginBottom: "0px" }}>
                    Tài khoản{" "}
                  </p>
                  <input
                    type="text"
                    id="txtUsername"
                    name="txtUsername"
                    style={{ height: "40px" }}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />{" "}
                  <br />
                  <p align="left" style={{ marginBottom: "0px" }}>
                    Mật khẩu
                  </p>
                  <input
                    type="password"
                    id="txtPassword"
                    name="txtPassword"
                    style={{ height: "40px" }}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div id="btnLogin" onClick={handleLogin}>
                  <p id="login_p"> Đăng nhập </p>
                </div>
                <br />
                <p>
                  Bạn chưa có tài khoản ?<Link to="register">Đăng ký</Link>
                </p>
                <div className="login-error-message">
                  <span>{loginError ? loginError.error : ""}</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-3"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  loginPending: state.auth.loginPendingState,
  loginFailed: state.auth.loginFailedState,
  loginError: state.auth.loginErrorMessage,
  loggedIn: state.auth.loginState,
});

const mapDispatchToProps = (dispatch) => ({
  login: (email, passWord) => dispatch(Actions.loginAction(email, passWord)),
});

Login.defaultProps = {
  loginError: { error: "" },
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  loginPending: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  loginError: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
