import React from "react";
import { Link } from "react-router-dom";

const Member = ({ user, role }) => {
  return (
    <>
      <div className="col-lg-6">
        <div className="friend-info-item">
          <div className="friend-info-item-div">
            <img
              className="friend-avatar-item"
              src={`http://localhost:3013/user/image/${user && user.avatar}`}
              alt=""
            />
          </div>
          <div className="friend-item-des-div" style={{ width: "140px" }}>
            <Link to={`/slytherin/profile/${user && user.username}`} title="">
              {user && user.username}
            </Link>
            <p className="friend-item-des">{user && user.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Member;
