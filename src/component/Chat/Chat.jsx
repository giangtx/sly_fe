import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { useParams } from "react-router-dom";
import ChatBox from "./ChatBox";
import MessageBox from "./MessageBox";
import "./css/chat.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Actions from "../../store/actions";

const ENDPOINT = "http://localhost:3013/";

let socket;

const Chat = ({ addMessage, userInfo }) => {
  const params = useParams();
  
  const [message, setMessage] = useState("");
  useEffect(() => {
    socket = io(ENDPOINT);
    const room = params.id;
    console.log(room)
    socket.emit("join", { name: userInfo.username, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, params.id]);

  useEffect(() => {
    socket.on("message", (response) => {
      const room = params.id;
      if (response.idChat === parseInt(params.id)) {
        console.log(response.idChat, params.id)
        addMessage(response);
      }
    });
  }, [params.id]);
  const sendMessage = (event) => {
    event.preventDefault();
    const room = params.id;
    if (message) {
      socket.emit("sendMessage", { name: userInfo.username, message, room }, () => setMessage(""));
    }
  };

  return (
    <>
      <div id="chat_room">
        <div className="container-fluid">
          <div className="row">
            <ChatBox></ChatBox>
            <MessageBox
              message={message}
              setMessage={setMessage}
              sendMessage={sendMessage}
              name={userInfo ? userInfo.username : ""}
            ></MessageBox>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  userInfo: state.user.userInfo,
});
const mapDispatchToProps = (dispatch) => ({
  addMessage: (response) => dispatch(Actions.addMessageAction(response)),
  // getInfo: () => dispatch(Actions.getInfo()),
});

Chat.defaultProps = {
  userInfo: null,
};
Chat.propTypes = {
  // getInfo: PropTypes.func.isRequired,
  userInfo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  addMessage: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Chat);
