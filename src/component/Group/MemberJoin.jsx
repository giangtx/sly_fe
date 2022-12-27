import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Actions from "../../store/actions";
import PropTypes from "prop-types";

const MemberJoin = ({ user, role, approvalUserGroup, id }) => {
  const [isApproval, setIsApproval] = useState(false);
  const [isUnApproval, setIsUnApproval] = useState(false);

  const handleApproval = () => {
    if (!isApproval) {
      setIsApproval(true);
      approvalUserGroup(id, user.id, true);
    }
  };
  const handleUnApproval = () => {
    if (!isUnApproval) {
      setIsUnApproval(true);
      approvalUserGroup(id, user.id, false);
    }
  };
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
          <div className="friend-item-des-div">
            <Link to={`/slytherin/profile/${user && user.username}`} title="">
              {user && user.username}
            </Link>
            <p className="friend-item-des">{user && user.description}</p>
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
    </>
  );
};
const mapDispatchToProps = (dispatch) => ({
  approvalUserGroup: (idGroup, idUser, isApproval) =>
    dispatch(Actions.approvalUserGroupAction(idGroup, idUser, isApproval)),
});
MemberJoin.propTypes = {
  approvalUserGroup: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(MemberJoin);
