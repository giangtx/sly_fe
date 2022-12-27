import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Actions from "../../store/actions";

const BlockTab = ({ id, username, avatar, description, userInfo, unblockUser }) => {
  const [isAdd, setIsAdd] = useState(false);
  const handleAddFriend = () => {
    if (!isAdd) {
      setIsAdd(true);
      unblockUser(id);
    }
  };
  return (
    <>
      {userInfo.id !== id && (
        <div className="col-lg-12">
          <div className="friend-info-item">
            <div className="friend-info-item-div">
              <img
                className="friend-avatar-item"
                src={`http://localhost:3013/user/image/${avatar}`}
                alt=""
              />
            </div>
            <div className="friend-item-des-div" style={{ width: "500px" }}>
              <Link to={`/slytherin/profile/${username}`} title="">
                {username}
              </Link>
              <p className="friend-item-des">{description}</p>
            </div>
            <div className="btn-friend-add">
              <button onClick={handleAddFriend}>
                {isAdd ? "Đã mở" : "Mở"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  userInfo: state.user.userInfo,
});
const mapDispatchToProps = (dispatch) => ({
  unblockUser: (id) => dispatch(Actions.unblockUserAction(id)),
});
BlockTab.defaultProps = {
  userInfo: null,
};

BlockTab.propTypes = {
  userInfo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  unblockUser: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(BlockTab);
