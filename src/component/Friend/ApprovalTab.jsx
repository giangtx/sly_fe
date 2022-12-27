import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Actions from "../../store/actions";
import PropTypes from "prop-types";

const ApprovalTab = ({ ban, approvalFriend }) => {
  const [isApproval, setIsApproval] = useState(false);
  const [isUnApproval, setIsUnApproval] = useState(false);

  const handleApproval = () => {
    if (!isApproval) {
      setIsApproval(true);
      approvalFriend(ban.id, true)
    }
  };
  const handleUnApproval = () => {
    if (!isUnApproval) {
      setIsUnApproval(true);
      approvalFriend(ban.id, false)
    }
  };
  return (
    <div className="col-lg-6">
      <div className="friend-info-item">
        <div className="friend-info-item-div">
          <img
            className="friend-avatar-item"
            src={`http://localhost:3013/user/image/${ban && ban.avatar}`}
            alt=""
          />
        </div>
        <div className="friend-item-des-div">
          <Link to={`/slytherin/profile/${ban && ban.username}`} title="">
            {ban && ban.username}
          </Link>
          <p className="friend-item-des">{ban && ban.description}</p>
        </div>
        {!isUnApproval && (
          <div className="btn-friend-approval">
            <button onClick={handleApproval}>
              {isApproval ? "Đã chấp nhận" : "Đồng ý"}
            </button>
          </div>
        )}
        {!isApproval && (
          <div className="btn-friend-un-approval">
            <button onClick={handleUnApproval}>
              {isUnApproval ? "Đã từ chối" : "Từ chối"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  approvalFriend: (id, isApproval) => dispatch(Actions.approvalFriendAction(id, isApproval)),
});
ApprovalTab.propTypes = {
  approvalFriend: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(ApprovalTab);
