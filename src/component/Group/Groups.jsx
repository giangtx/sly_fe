import React, { useState, useEffect } from "react";
import RightBar from "../Home/RightBar";
import LeftBar from "../Home/LeftBar";
import { Link, useParams } from "react-router-dom";
import "./css/groups.css";
import UserGroupTab from "./UserGroupTab";
import OtherGroupTab from "./OtherGroupTab";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Actions from "../../store/actions";

const Groups = ({
  groups,
  size,
  currentPage,
  totalPage,
  getUserGroup,
  getOtherGroup,
}) => {
  const params = useParams();
  let list = null;
  useEffect(() => {
    list = null;
    if (params.id === "my") {
      getUserGroup(10, 1, "");
    }
    if (params.id === "add") {
      getOtherGroup(10, 1, "");
    }
  }, [params.id]);

  if (params.id === "my") {
    list = groups.map((group, index) => {
      return (
        <UserGroupTab
          key={index}
          id={group.id}
          name={group.name}
          avatar={group.avatar}
        />
      );
    });
  }
  if (params.id === "add") {
    list = groups.map((group, index) => {
      return (
        <OtherGroupTab
          key={index}
          id={group.id}
          name={group.name}
          avatar={group.avatar}
        />
      );
    });
  }
  return (
    <>
      <div
        className="container-fluid"
        style={{ padding: "0px", paddingTop: "55px" }}
      >
        <div className="row" style={{ margin: "0px" }}>
          <div className="col-lg-9">
            <div id="froum-all">
              <div className="container-fluid" style={{ padding: "0px" }}>
                <div className="row">
                  <LeftBar></LeftBar>
                  <div className="col-lg-8">
                    <div className="friend-header">
                      <div
                        className="friend-header-text-friend"
                        style={{ width: "170px" }}
                      >
                        <Link
                          to="/slytherin/groups/my"
                          className={`${
                            params.id === "my" ? "active-header-friend" : ""
                          }`}
                        >
                          Nhóm của tôi
                        </Link>
                      </div>
                      <div
                        className="friend-header-text-add"
                        style={{ width: "190px" }}
                      >
                        <Link
                          to="/slytherin/groups/add"
                          className={`${
                            params.id === "add" ? "active-header-friend" : ""
                          }`}
                        >
                          Nhóm khác
                        </Link>
                      </div>
                      <label className="label_search_chatbox-home">
                        <input
                          className="search_chatbox"
                          type="text"
                          placeholder="Tìm kiếm"
                        ></input>
                      </label>
                    </div>
                    <div className="friend-content">{list}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3" style={{ padding: "0px" }}>
            <RightBar></RightBar>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  groups: state.group.groups,
  size: state.group.size,
  currentPage: state.group.currentPage,
  totalPage: state.group.totalPage,
});

const mapDispatchToProps = (dispatch) => ({
  getUserGroup: (sizeP, pageP, searchP) =>
    dispatch(Actions.getUserGroupAction(sizeP, pageP, searchP)),
  getOtherGroup: (sizeP, pageP, searchP) =>
    dispatch(Actions.getOtherGroupAction(sizeP, pageP, searchP)),
});

Groups.defaultProps = {
  groups: [],
  size: 0,
  currentPage: 0,
  totalPage: 0,
};

Groups.propTypes = {
  getUserGroup: PropTypes.func.isRequired,
  getOtherGroup: PropTypes.func.isRequired,
  groups: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  size: PropTypes.number,
  currentPage: PropTypes.number,
  totalPage: PropTypes.number,
};
export default connect(mapStateToProps, mapDispatchToProps)(Groups);
