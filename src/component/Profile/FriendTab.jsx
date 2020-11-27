import React from "react";
import "./css/profile.css";
import PropTypes from "prop-types";

const FriendTab = ({ friends }) => {
  const lists = friends.map((friend, index) => {
    return (
      <div className="col-lg-3" key={index} style={{ padding: "0px" }}>
        <div className="avatar-friend-div-profile" style={{ padding: "0px" }}>
          <img
            className="avatar-friend-profile"
            src={`http://localhost:3013/user/image/${friend.ban.avatar}`}
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
        <div className="row" style={{ padding: "10px", paddingBottom: "0px" }}>
          {lists}
        </div>
      </div>
    </>
  );
};
FriendTab.defaultProps = {
  friends: [],
};

FriendTab.propTypes = {
  friends: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};
export default FriendTab;
