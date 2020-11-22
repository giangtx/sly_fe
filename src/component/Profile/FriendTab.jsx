import React from "react";
import "./css/profile.css";

const FriendTab = () => {
  const friends = [
    {
      avatar: "DSC02249.jpg",
    },
    {
      avatar: "gai.jpg",
    },
    {
      avatar: "1223.jpg",
    },
    {
      avatar: "DSC02249.jpg",
    },
    {
      avatar: "gai.jpg",
    },
    {
      avatar: "1223.jpg",
    },
    {
      avatar: "DSC02249.jpg",
    },
    {
      avatar: "gai.jpg",
    },
    {
      avatar: "1223.jpg",
    },
  ];
  const lists = friends.map((friend, index) => {
    return (
      <div className="col-lg-3" key={index} style={{padding: "0px"}}>
        <div className="avatar-friend-div-profile" style={{ padding: "0px" }}>
          <img
            className="avatar-friend-profile"
            src={`/image/avatar/${friend.avatar}`}
            alt=""
          />
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="div-friend-profile-page">
        <span className="friend-profile-page">
          <span>
            <i className="fas fa-user-friends"></i>
          </span>{" "}
          Bạn bè
        </span>
        <div className="row" style={{ padding: "10px", paddingBottom: "0px" }}>{lists}</div>
      </div>
    </>
  );
};
export default FriendTab;
