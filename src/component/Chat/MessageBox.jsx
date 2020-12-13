import React, { useRef, useEffect } from "react";
import TitleBox from "./TitleBox";
import MessageItem from "./MessageItem";
import "./css/messageBox.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Actions from "../../store/actions";
import { useParams } from "react-router-dom";

const MessageBox = ({
  setMessage,
  sendMessage,
  message,
  messages,
  getSuccess,
  getFailed,
  getError,
  getMessageByChat,
  size,
  currentPage,
  totalPage,
  name,
}) => {
  const params = useParams();
  useEffect(() => {
    getMessageByChat(params.id, 10, 1);
  }, [params.id]);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView();
  };
  useEffect(scrollToBottom, [messages]);

  const list = messages.map((message, index) => {
    return (
      <MessageItem
        key={index}
        content={message.message}
        avatar={message.user ? message.user.avatar : null}
        username={message.user ? message.user.username : null}
        name={name}
      ></MessageItem>
    );
  });

  return (
    <div className="col-lg-9 message_box">
      <TitleBox></TitleBox>
      <div className="message_content">
        {list}
        <div ref={messagesEndRef} />
      </div>
      <div className="meessage_send_bar">
        <div className="row">
          <div className="col-lg-11" style={{ paddingRight: "0px" }}>
            <label
              className="label_search_chatbox"
              style={{ paddingRight: "0px" }}
            >
              <input
                className="search_chatbox"
                type="text"
                placeholder="Gửi tin nhắn"
                value={message}
                onChange={({ target: { value } }) => setMessage(value)}
                onKeyPress={(event) =>
                  event.key === "Enter" ? sendMessage(event) : null
                }
              ></input>
            </label>
          </div>
          <div
            className="col-lg-1"
            style={{ paddingTop: "10px", paddingLeft: "5px" }}
            onClick={(e) => sendMessage(e)}
          >
            <img
              className="icon-send"
              src="/image/icon/paper-plane-blue.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  messages: state.message.messages,
  getSuccess: state.message.getMessageByChatSuccessState,
  getFailed: state.message.getMessageByChatFailedState,
  getError: state.message.getMessageByChatErrorMessage,
  size: state.message.size,
  currentPage: state.message.currentPage,
  totalPage: state.message.totalPage,
  // userInfo: state.user.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
  getMessageByChat: (id, sizeP, pageP) =>
    dispatch(Actions.getMessageByChatAction(id, sizeP, pageP)),
  // getInfo: () => dispatch(Actions.getInfo()),
});

MessageBox.defaultProps = {
  messages: [],
  getError: { error: "" },
  size: 0,
  currentPage: 0,
  totalPage: 0,
  // userInfo: null,
};

MessageBox.propTypes = {
  // getInfo: PropTypes.func.isRequired,
  // userInfo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  getMessageByChat: PropTypes.func.isRequired,
  messages: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  getSuccess: PropTypes.bool.isRequired,
  getFailed: PropTypes.bool.isRequired,
  getError: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  size: PropTypes.number,
  currentPage: PropTypes.number,
  totalPage: PropTypes.number,
};
export default connect(mapStateToProps, mapDispatchToProps)(MessageBox);
