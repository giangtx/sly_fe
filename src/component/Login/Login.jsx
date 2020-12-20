import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./css/login.css";
import { connect } from "react-redux";
import Actions from "../../store/actions";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";

const Login = ({
  login,
  loggedIn,
  loginPending,
  loginError,
  verifyAccount,
  verifyPending,
  verifyFailed,
  verifyError,
  verifySuccess,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState();

  const handleClose = () => {
    setShow(false);
  };
  const handleLogin = () => {
    login(username, password);
  };
  const handleVerify = () => {
    verifyAccount(email, code);
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
                <p style={{ marginBottom: "5px" }}>
                  Bạn chưa có tài khoản ?<Link to="register">Đăng ký</Link>
                </p>
                <p style={{ marginBottom: "5px" }}>
                  Tài khoản chưa kích hoạt?{" "}
                  <span
                    style={{ cursor: "pointer", color: "blue" }}
                    onClick={() => {
                      setShow(true);
                    }}
                  >
                    Kích hoạt
                  </span>
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
      <Modal show={show} onHide={handleClose} className="change-avatar-modal">
        <Modal.Header closeButton>
          <span>Xác thực tài khoản</span>
        </Modal.Header>
        <Modal.Body>
          <div className="edit-profile-div">
            <div className="row">
              <div className="col-lg-12">
                <p>Email</p>
                <input
                  type="text"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></input>
              </div>
              <div className="col-lg-12">
                <p>Mã xác thực</p>
                <input
                  type="text"
                  onChange={(e) => {
                    setCode(e.target.value);
                  }}
                ></input>
              </div>
              <div className="col-lg-12">
                <div className="btn-edit-profile">
                  <button onClick={handleVerify}>Xác thực</button>
                </div>
              </div>
              <div className="login-error-message" style={{ paddingLeft: "15px" }}>
                <span>{verifySuccess ? "Xác thực tài khoản thành công" : ""}</span>
                <span>{verifyError ? verifyError.error : ""}</span>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  loginPending: state.auth.loginPendingState,
  loginFailed: state.auth.loginFailedState,
  loginError: state.auth.loginErrorMessage,
  loggedIn: state.auth.loginState,
  verifyPending: state.auth.verifyAccountPendingState,
  verifyFailed: state.auth.verifyAccountFailedState,
  verifyError: state.auth.verifyAccountErrorMessage,
  verifySuccess: state.auth.verifyAccountSuccessState,
});
const mapDispatchToProps = (dispatch) => ({
  login: (email, passWord) => dispatch(Actions.loginAction(email, passWord)),
  verifyAccount: (email, code) => dispatch(Actions.verifyAccountAction(email, code)),
});

Login.defaultProps = {
  loginError: { error: "" },
};

Login.propTypes = {
  verifyAccount: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  loginPending: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  loginError: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
