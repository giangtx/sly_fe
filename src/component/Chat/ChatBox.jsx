import React, { useState, useEffect } from "react";
import ChatBoxItem from "./ChatBoxItem";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Actions from "../../store/actions";
import "./css/chatbox.css";
import { useParams } from "react-router-dom";

const ChatBox = ({
  chats,
  getSuccess,
  getFailed,
  getError,
  getChatByUser,
  size,
  currentPage,
  totalPage,
}) => {
  const params = useParams();
  useEffect(() => {
    getChatByUser(10, 1);
  }, []);
  const list = chats.map((chat, index) => {
    return (
      <ChatBoxItem
        key={index}
        id={chat.id}
        isActive={parseInt(params.id) === chat.id ? true : false}
        image={chat.type !== 1 ? chat.image : chat.member_chats[0].user.avatar}
        name={chat.type !== 1 ? chat.name: chat.member_chats[0].user.username}
        // lastMessage={chat.lastMessage}
        // time={chat.time}
      ></ChatBoxItem>
    );
  });
  return (
    <>
      <div className="col-lg-3 chat_leftside">
        <div className="row" style={{ paddingLeft: "15px" }}>
          <div className="avatar-chat-div" style={{ padding: "0px" }}>
            <img
              className="avatar-chat"
              src="/image/avatar/DSC02249.jpg"
              alt=""
            />
          </div>
          <div>
            <span style={{ fontSize: "25px", fontWeight: "500" }}>Chat</span>
          </div>
          <label className="label_search_chatbox">
            <input
              className="search_chatbox"
              type="text"
              placeholder="Tìm kiếm"
            ></input>
          </label>
        </div>
        {list}
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  chats: state.chat.chats,
  getSuccess: state.chat.getChatByUserSuccessState,
  getFailed: state.chat.getChatByUserFailedState,
  getError: state.chat.getChatByUserErrorMessage,
  size: state.chat.size,
  currentPage: state.chat.currentPage,
  totalPage: state.chat.totalPage,
  // userInfo: state.user.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
  getChatByUser: (sizeP, pageP) =>
    dispatch(Actions.getChatByUserAction(sizeP, pageP)),
  // getInfo: () => dispatch(Actions.getInfo()),
});

ChatBox.defaultProps = {
  chats: [],
  getError: { error: "" },
  size: 0,
  currentPage: 0,
  totalPage: 0,
  // userInfo: null,
};

ChatBox.propTypes = {
  // getInfo: PropTypes.func.isRequired,
  // userInfo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  getChatByUser: PropTypes.func.isRequired,
  chats: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  getSuccess: PropTypes.bool.isRequired,
  getFailed: PropTypes.bool.isRequired,
  getError: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  size: PropTypes.number,
  currentPage: PropTypes.number,
  totalPage: PropTypes.number,
};
export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);
