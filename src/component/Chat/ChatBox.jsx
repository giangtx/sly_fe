import React from "react";
import ChatBoxItem from './ChatBoxItem';
import './css/chatbox.css'

const ChatBox = () => {
  const chats = [
    {
      id: 1,
      isActive: true,
      image: 'DSC02249.jpg',
      name: 'Mèo',
      lastMessage: 'Gió đưa cây cải về trời',
      time: '1 phút trước',
    },
    {
      id: 2,
      isActive: false,
      image: '1223.jpg',
      name: 'Mèo',
      lastMessage: 'Rau răm ở lại chịu đời đắng cay',
      time: '3 tiếng trước',
    },
    {
      id: 1,
      isActive: false,
      image: 'DSC02249.jpg',
      name: 'Chó',
      lastMessage: 'Gió đưa cây cải về trời',
      time: '1 phút trước',
    },
    {
      id: 1,
      isActive: false,
      image: 'gai.jpg',
      name: 'Mèo',
      lastMessage: 'Gió đưa cây cải về trời',
      time: '1 phút trước',
    },
  ]
  const list =chats.map((chat,index) => {
    return(
      <ChatBoxItem key={index}
        id={chat.id}
        isActive={chat.isActive}
        image={chat.image}
        name={chat.name}
        lastMessage={chat.lastMessage}
        time={chat.time}
      ></ChatBoxItem>
    )
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
export default ChatBox;
