import React from "react";
import ChatBox from "./ChatBox";
import MessageBox from "./MessageBox";
import "./css/chat.css";

const Chat = () => {
  return (
    <>
      <div id="chat_room">
        <div className="container-fluid">
          <div className="row">
            <ChatBox></ChatBox>
            <MessageBox></MessageBox>
          </div>
        </div>
      </div>
    </>
  );
};
export default Chat;
