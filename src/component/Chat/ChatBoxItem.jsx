import React from "react";
import { Link } from "react-router-dom";
import './css/listChatBox.css';

const ChatBoxItem = ({
  id,
  isActive,
  image,
  name,
  lastMessage,
  time,
}) => {
  return (
    <>
      <div className="chatbox-a">
        <Link to={"/Slytherin/chat/"+ id}>
          <div
            className={`row chatbox " ${isActive ? "chatbox-active" : ""}`}
            style={{ paddingLeft: "15px" }}
          >
            <div
              className="avatar-chat-div"
              style={{ padding: "0px" }}
            >
              <img className="avatar-chat" src={`/image/avatar/${image}`} alt="" />
            </div>
            <div>
              <div className="chatbox_p">
                <p style={{ fontSize: "15px", textTransform: "capitalize" }}>
                  {name}
                </p>
                <p style={{ fontSize: "13px" }}>
                  <span>{lastMessage}</span>
                  <span style={{ color: "#868686" }}>.{time}</span>
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
export default ChatBoxItem;
