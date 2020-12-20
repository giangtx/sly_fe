import React, { useState, useEffect } from "react";
import ChatBoxItemHome from "./ChatBoxItemHome";
import "./css/rightbar.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Actions from "../../store/actions";

const RightBar = ({
  chats,
  getSuccess,
  getFailed,
  getError,
  getChatByUser,
  size,
  currentPage,
  totalPage,
}) => {
  useEffect(() => {
    getChatByUser(10, 1);
  }, []);
  const list = chats.map((chat, index) => {
    return (
      <ChatBoxItemHome
        key={index}
        id={chat.id}
        image={chat.type !== 1 ? chat.image : chat.member_chats[0].user.avatar}
        name={chat.type !== 1 ? chat.name: chat.member_chats[0].user.username}
      ></ChatBoxItemHome>
    );
  });
  return (
    <>
      <div className="right-bar">
        <div className="right-bar-body">
          <div className="right-bar-header">
            <i className="far fa-address-book"></i>
          </div>
          {list}
        </div>
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

RightBar.defaultProps = {
  chats: [],
  getError: { error: "" },
  size: 0,
  currentPage: 0,
  totalPage: 0,
  // userInfo: null,
};

RightBar.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(RightBar);
