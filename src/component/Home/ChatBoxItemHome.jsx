import React from "react";
import { Link } from "react-router-dom";
import './css/chatBoxItemHome.css';

const ChatBoxItemHome = ({ id, image, name, lastMessage }) => {
  return (
    <div className="chatbox-a-home">
      <Link to={"/Slytherin/chat/" + id}>
        <div className="chatbox-home" >
          <div className="avatar-chat-div-home" style={{ padding: "0px" }}>
            <img
              className="avatar-chat-home"
              src={`/image/avatar/${image}`}
              alt=""
            />
          </div>
          <div className="text-chat-box-home">
            <div>
              <p style={{ fontSize: "15px", textTransform: "capitalize" }}>
                {name}
              </p>
              <p style={{ fontSize: "12px" }} className="des-home-chat">
                <span>{lastMessage}</span>
                <span style={{ color: "#868686" }}></span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default ChatBoxItemHome;
