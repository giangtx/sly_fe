import React, { useRef, useEffect } from "react";
import TitleBox from "./TitleBox";
import MessageItem from "./MessageItem";
import "./css/messageBox.css";

const MessageBox = () => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView();
  };
  useEffect(scrollToBottom, []);

  const messages = [
    {
      typeuser: 1,
      content: "hello world",
      senderimage: "DSC02249.jpg",
    },
    {
      typeuser: 2,
      content: "Quen à",
      senderimage: "gai.jpg",
    },
    {
      typeuser: 1,
      content: "Không",
      senderimage: "DSC02249.jpg",
    },
    {
      typeuser: 2,
      content: "thế hello cc à",
      senderimage: "gai.jpg",
    },
    {
      typeuser: 1,
      content: "Ăn cơm chưa",
      senderimage: "DSC02249.jpg",
    },
    {
      typeuser: 2,
      content: "gió đưa cây cải về trời",
      senderimage: "gai.jpg",
    },
    {
      typeuser: 2,
      content: "Rau Răm ở lại chịu đời đắng cay",
      senderimage: "gai.jpg",
    },
    {
      typeuser: 2,
      content: "Hay chớ",
      senderimage: "gai.jpg",
    },
    {
      typeuser: 1,
      content:
        "Anh đâu muốn xa con phố ta đã yêu. Nơi ấy hẹn hò đôi ta chuyện trò. Nơi ấy đã từng đón đưa những chiều ta tới trường..",
      senderimage: "DSC02249.jpg",
    },
    {
      typeuser: 2,
      content:
        "Tiếng yêu này mỏng manh Giờ tan vỡ, thôi cũng đành Xếp riêng những ngày tháng hồn nhiên Trả hết cho em",
      senderimage: "gai.jpg",
    },
    {
      typeuser: 1,
      content: "Ăn cơm chưa",
      senderimage: "DSC02249.jpg",
    },
    {
      typeuser: 2,
      content: "thế hello cc à",
      senderimage: "gai.jpg",
    },
    {
      typeuser: 1,
      content: "Ăn cơm chưa",
      senderimage: "DSC02249.jpg",
    },
    {
      typeuser: 2,
      content: "Xin lỗi",
      senderimage: "gai.jpg",
    },
    {
      typeuser: 1,
      content: "Chấp nhận lời xin lỗi",
      senderimage: "DSC02249.jpg",
    },
  ];
  const list = messages.map((message, index) => {
    return (
      <MessageItem
        key={index}
        typeuser={message.typeuser}
        content={message.content}
        senderimage={message.senderimage}
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
              ></input>
            </label>
          </div>
          <div
            className="col-lg-1"
            style={{ paddingTop: "10px", paddingLeft: "5px" }}
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
export default MessageBox;
