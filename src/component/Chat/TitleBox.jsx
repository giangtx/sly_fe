import React from "react";
import './css/titleBox.css';

const TitleBox = () => {
  return (
    <>
      <div className="row message_title" style={{ paddingLeft: "15px" }}>
        <div className="avatar-chat-div" style={{ padding: "0px" }}>
          <img
            className="avatar-chat"
            src="/image/avatar/DSC02249.jpg"
            alt=""
          />
        </div>
        <div>
          <span className="title-message-box">Nguyễn trường giang</span>
        </div>
      </div>
    </>
  );
};
export default TitleBox;
