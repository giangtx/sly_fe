import React from "react";

const MessageItem = ({name, content, avatar, username}) => {
  return (
    <>
      {username === name ? (
        <div className="message" align="right">
          <div className="row">
            <div
              className="col-md-11 col-sm-11"
              style={{ paddingLeft: "5px", paddingRight: "5px" }}
            >
              <div className="message_detail message_detail_user">
                <div className="message-div">
                  <span style={{ fontSize: "15px" }}>{content}</span>
                </div>
              </div>
            </div>
            <div className="avatar-message-chat-div" style={{ padding: "0px" }}>
              <img
                className="avatar-message-chat"
                src={`http://localhost:3013/user/image/${avatar?avatar:"blank.jpg"}`}
                alt=""
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="message">
          <div className="row">
            <div className="avatar-message-chat-div" style={{ padding: "0px" }}>
              <img
                className="avatar-message-chat"
                src={`http://localhost:3013/user/image/${avatar?avatar:"blank.jpg"}`}
                alt=""
              />
            </div>
            <div
              className="col-md-11 col-sm-11"
              style={{ paddingLeft: "5px", paddingRight: "5px" }}
            >
              <div className="message_detail message_detail_friend">
                <div className="message-div">
                  <span style={{ fontSize: "15px" }}>{content}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default MessageItem;
