import React from "react";

const LefttBar = () => {
  return (
    <>
      <div className="col-lg-4">
        <div className="row" style={{ paddingLeft: "15px" }}>
          <div className="avatar-froum-div" style={{ padding: "0px" }}>
            <img
              className="avatar-froum"
              src="/image/avatar/DSC02249.jpg"
              alt=""
            />
          </div>
          <div>
            <span style={{ fontSize: "15px" }}>Bạn chưa đăng nhập</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default LefttBar;
