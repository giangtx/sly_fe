import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Actions from "../../store/actions";
import PropTypes from "prop-types";

const OtherGroupTab = ({ id, name, avatar, joinGroup }) => {
  const [isJoin, setIsJoin] = useState(false);
  const handleJoin = () => {
    if (!isJoin) {
      setIsJoin(true);
      joinGroup(id)
    }
  };

  return (
    <div style={{ height: "70px" }}>
      <div className="group-item-div-left">
        <div className="group-item-div">
          <div className="avatar-group-div">
            <img
              src={`http://localhost:3013/user/image/${avatar}`}
              alt=""
            ></img>
          </div>
          <div className="description-group-div">
            <div className="group-name-div">
              <span>{name}</span>
            </div>
            <div className="number-member">10 tỉ thành viên</div>
          </div>
        </div>
      </div>

      <div className="btn-other-tab-join">
        <button onClick={handleJoin}>{isJoin ? "Đã xin" : "Gia nhập"}</button>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  joinGroup: (id) => dispatch(Actions.joinGroupAction(id)),
});
OtherGroupTab.propTypes = {
  joinGroup: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(OtherGroupTab);
