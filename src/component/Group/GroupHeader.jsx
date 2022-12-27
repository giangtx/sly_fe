import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Actions from "../../store/actions";
import { useParams } from "react-router-dom";

const GroupHeader = ({ group, getGroupById }) => {
  const params = useParams();
  useEffect(() => {
    getGroupById(params.id);
  }, [params.id]);
  return (
    <>
      <div className="profile-header">
        <div className="cover-image-profile">
          <img
            className="image-cover-profile"
            src={`http://localhost:3013/user/image/${
              group && group.coverImage
            }`}
            alt=""
          />
        </div>
        <div className="profile-header-info">
          <div className="avatar-group-header-div">
            <img
              className="avatar-group-header-img"
              src={`http://localhost:3013/user/image/${group && group.avatar}`}
              alt=""
            />
          </div>
          <div
            style={{
              lineHeight: "20px",
              paddingBottom: "5px",
              textAlign: "center",
            }}
          >
            <span className="name-profile-header">{group && group.name}</span>
            <div>
              <span style={{ fontSize: "16px" }}>{group && group.description}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  group: state.group.group,
});

const mapDispatchToProps = (dispatch) => ({
  getGroupById: (idP) => dispatch(Actions.getGroupByIdAction(idP)),
});

GroupHeader.defaultProps = {
  group: {},
  size: 0,
  currentPage: 0,
  totalPage: 0,
};

GroupHeader.propTypes = {
  getGroupById: PropTypes.func.isRequired,
  group: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};
export default connect(mapStateToProps, mapDispatchToProps)(GroupHeader);
