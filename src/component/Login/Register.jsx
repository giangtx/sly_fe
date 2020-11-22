import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/register.css";
import { connect } from "react-redux";
import Actions from "../../store/actions";
import PropTypes from "prop-types";

const Register = ({ register, registerError, registerSuccess, errorMessage }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const registerHandle = () => {
    register(username, password, email)
  }

  return (
    <>
      <div className="padding-login">
        <div className="container-fluid" align="center">
          <div className="row">
            <div className="col-md-5" id="boc">
              <div id="signin-background">
                <div style={{ padding: "40px", textAlign: "left" }}>
                  <div className="padding-sly">
                    <h1 className="site-title" style={{ fontSize: "30px" }}>
                      <Link
                        to="/slytherin"
                        style={{
                          color: "black",
                          paddingRight: "313px",
                          marginRight: "313px",
                        }}
                      >
                        Slytherin
                      </Link>
                    </h1>
                    <p id="boc-p1">Nơi bắt đầu sự sáng tạo</p>
                    <p id="boc-p2">
                      Tìm kiếm hàng ngàn bức ảnh miễn phí, độ phân giải cao mà
                      bạn không thể tìm kiếm ở bất cứ nơi đâu
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7" id="signin-p-82">
              <div className="padding-sly">
                <h1 className="site-title" style={{ fontSize: "55px" }}>
                  <Link to="/slytherin">Slytherin</Link>
                </h1>
                <p className="site-tiny">Khám phá thế giới muôn màu</p>
              </div>
              <div style={{ marginBottom: "25px" }}>
                <b style={{ fontSize: "23px" }}>Đăng ký</b>
              </div>
              <div id="para">
                <p align="left" style={{ marginBottom: "0px" }}>
                  Email{" "}
                </p>
                <input
                  type="text"
                  id="txtEmail"
                  name="txtEmail"
                  style={{ height: "40px" }}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />{" "}
                <br />
                <p align="left" style={{ marginBottom: "0px" }}>
                  Tên tài khoản{" "}
                </p>
                <input
                  type="text"
                  id="txtUsernameLogin"
                  name="txtUsernameLogin"
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
                  id="txtPasswordLogin"
                  name="txtPasswordLogin"
                  style={{ height: "40px" }}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <p align="left" style={{ marginBottom: "0px" }}>
                  Nhập lại mật khẩu
                </p>
                <input
                  type="password"
                  id="txtConfirmPassword"
                  name="txtConfirmPassword"
                  style={{ height: "40px" }}
                />
              </div>
              <div id="btnSignin" onClick={registerHandle}>
                <p id="login_p">
                  {" "}
                  Đăng ký{" "}
                </p>
              </div>
              <br />
              <p>
                Bằng việc nhấn nút Đăng ký, bạn đã chấp nhận mọi{" "}
                <Link to="#">Điều khoản </Link> của Slytherin
              </p>
              <div id="errorSignin" style={{ height: "20px" }}></div>
              <div className="login-error-message">
                <span>{registerError ? errorMessage.error : ""}</span>
                <span>{registerSuccess ? "Đăng ký tài khoản thành công vui lòng kiểm tra email" : ""}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  errorMessage: state.auth.registerErrorMessage,
  registerSuccess: state.auth.registerSuccessState,
  registerError: state.auth.registerFailedState,
});

const mapDispatchToProps = (dispatch) => ({
  register: (username, passWord, email) => dispatch(Actions.registerAction(username, passWord, email)),
});

Register.defaultProps = {
  errorMessage: { error: "" },
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  registerSuccess: PropTypes.bool.isRequired,
  registerError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
