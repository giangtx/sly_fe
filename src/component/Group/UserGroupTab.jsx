import React from "react";
import { Link } from "react-router-dom";

const UserGroupTab = ({ id, name, avatar }) => {
  return (
    <div className="group-item-div">
      <div className="avatar-group-div">
        <img src={`http://localhost:3013/user/image/${avatar}`} alt=""></img>
      </div>
      <div className="description-group-div">
        <div className="group-name-div">
          <Link to={`/slytherin/group/${id}`} title="">{name}</Link>
        </div>
        <div className="number-member">10 tỉ thành viên</div>
      </div>
    </div>
  );
};
export default UserGroupTab;
