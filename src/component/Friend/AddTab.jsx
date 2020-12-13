import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Actions from "../../store/actions";
import PropTypes from "prop-types";

const AddTab = ({ avatar, username, description, id, addFriend }) => {
  const [isAdd, setIsAdd] = useState(false);

  const handleAddFriend = () => {
    if (!isAdd) {
      setIsAdd(true);
      addFriend(id);
    }
  };
  return (
    <div className="col-lg-6">
      <div className="friend-info-item">
        <div className="friend-info-item-div">
          <img
            className="friend-avatar-item"
            src={`http://localhost:3013/user/image/${avatar}`}
            alt=""
          />
        </div>
        <div className="friend-item-des-div" style={{ width: "150px" }}>
          <Link to={`/slytherin/profile/${username}`} title="">
            {username}
          </Link>
          <p className="friend-item-des">{description}</p>
        </div>
        <div className="btn-friend-add">
          <button onClick={handleAddFriend}>
            {isAdd ? "Đã gửi" : "Kết bạn"}
          </button>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addFriend: (id) => dispatch(Actions.addFriendAction(id)),
});
AddTab.propTypes = {
  addFriend: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(AddTab);
