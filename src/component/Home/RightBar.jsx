import React from "react";
import ChatBoxItemHome from "./ChatBoxItemHome";
import "./css/rightbar.css";

const RightBar = () => {
  const chats = [
    {
      id: 1,
      isActive: true,
      image: "DSC02249.jpg",
      name: "Mèo",
      lastMessage: "Gió đưa cây cải về trời",
      time: "1 phút trước",
    },
    {
      id: 2,
      isActive: false,
      image: "1223.jpg",
      name: "Mèo",
      lastMessage: "Rau răm ở lại chịu đời đắng cay",
      time: "3 tiếng trước",
    },
    {
      id: 1,
      isActive: false,
      image: "DSC02249.jpg",
      name: "Chó",
      lastMessage: "Quê hương là chùm khế ngọt",
      time: "1 phút trước",
    },
    {
      id: 1,
      isActive: false,
      image: "gai.jpg",
      name: "Mèo",
      lastMessage: "Cho con trèo hái mỗi ngày",
      time: "1 phút trước",
    },
    {
      id: 1,
      isActive: false,
      image: "DSC02249.jpg",
      name: "Chó",
      lastMessage: "maybe i should just quit and go back to making noodles",
      time: "1 phút trước",
    },
    {
      id: 1,
      isActive: false,
      image: "gai.jpg",
      name: "Mèo",
      lastMessage: "Gió đưa cây cải về trời",
      time: "1 phút trước",
    },
    {
      id: 1,
      isActive: false,
      image: "DSC02249.jpg",
      name: "Chó",
      lastMessage: "Gió đưa cây cải về trời",
      time: "1 phút trước",
    },
    {
      id: 1,
      isActive: false,
      image: "gai.jpg",
      name: "Mèo",
      lastMessage: "Gió đưa cây cải về trời",
      time: "1 phút trước",
    },
    {
      id: 1,
      isActive: false,
      image: "DSC02249.jpg",
      name: "Chó",
      lastMessage: "Gió đưa cây cải về trời",
      time: "1 phút trước",
    },
    {
      id: 1,
      isActive: false,
      image: "gai.jpg",
      name: "Mèo",
      lastMessage: "Gió đưa cây cải về trời",
      time: "1 phút trước",
    },
    {
      id: 1,
      isActive: false,
      image: "DSC02249.jpg",
      name: "Chó",
      lastMessage: "Gió đưa cây cải về trời",
      time: "1 phút trước",
    },
    {
      id: 1,
      isActive: false,
      image: "gai.jpg",
      name: "Mèo",
      lastMessage: "Gió đưa cây cải về trời",
      time: "1 phút trước",
    },
    {
      id: 1,
      isActive: false,
      image: "DSC02249.jpg",
      name: "Chó",
      lastMessage: "Gió đưa cây cải về trời",
      time: "1 phút trước",
    },
    {
      id: 1,
      isActive: false,
      image: "gai.jpg",
      name: "Mèo",
      lastMessage: "Gió đưa cây cải về trời",
      time: "1 phút trước",
    },
    {
      id: 1,
      isActive: false,
      image: "DSC02249.jpg",
      name: "Chó",
      lastMessage: "Gió đưa cây cải về trời",
      time: "1 phút trước",
    },
    {
      id: 1,
      isActive: false,
      image: "gai.jpg",
      name: "Mèo",
      lastMessage: "Gió đưa cây cải về trời",
      time: "1 phút trước",
    },
    {
      id: 1,
      isActive: false,
      image: "DSC02249.jpg",
      name: "Chó",
      lastMessage: "Gió đưa cây cải về trời",
      time: "1 phút trước",
    },
    {
      id: 1,
      isActive: false,
      image: "gai.jpg",
      name: "Mèo",
      lastMessage: "Gió đưa cây cải về trời",
      time: "1 phút trước",
    },
    {
      id: 1,
      isActive: false,
      image: "DSC02249.jpg",
      name: "Chó",
      lastMessage: "Gió đưa cây cải về trời",
      time: "1 phút trước",
    },
    {
      id: 1,
      isActive: false,
      image: "gai.jpg",
      name: "Mèo",
      lastMessage: "Gió đưa cây cải về trời",
      time: "1 phút trước",
    },
  ];
  const list = chats.map((chat, index) => {
    return (
      <ChatBoxItemHome
        key={index}
        id={chat.id}
        isActive={chat.isActive}
        image={chat.image}
        name={chat.name}
        lastMessage={chat.lastMessage}
        time={chat.time}
      ></ChatBoxItemHome>
    );
  });
  return (
    <>
      <div className="right-bar">
        <div className="right-bar-header">
          <i className="far fa-address-book"></i>
          <span>Liên lạc</span>
        </div>
        {list}
      </div>
    </>
  );
};
export default RightBar;
