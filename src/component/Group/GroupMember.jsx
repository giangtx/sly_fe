import React, { useState, useEffect } from "react";
import RightBar from "../Home/RightBar";
import LeftBar from "../Home/LeftBar";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Actions from "../../store/actions";
import Member from "./Member";
import MemberJoin from "./MemberJoin";

const GroupMember = ({
  members,
  size,
  currentPage,
  totalPage,
  getMember,
  getJoin,
}) => {
  const params = useParams();
  let list = null;
  useEffect(() => {
    list = null;
    if (params.type === "mem") {
      getMember(params.id, 10, 1, "")
    }
    if (params.type === "app") {
      getJoin(params.id, 10, 1, "")
    }
  }, [params.type]);

  if (params.type === "mem") {
    list = members.map((member, index) => {
      return (
        <Member 
          key={index}
          user={member.user}
          role={member.role}
        />
      );
    });
  }
  if (params.type === "app") {
    list = members.map((member, index) => {
      return (
        <MemberJoin 
          key={index}
          user={member.user}
          role={member.role}
          id={params.id}
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
                        style={{ width: "120px" }}
                      >
                        <Link
                          to={`/slytherin/groupmember/${params.id}/mem`}
                          className={`${
                            params.type === "mem" ? "active-header-friend" : ""
                          }`}
                        >
                          Thành viên
                        </Link>
                      </div>
                      <div className="friend-header-text-app">
                        <Link
                          to={`/slytherin/groupmember/${params.id}/app`}
                          className={`${
                            params.type === "app" ? "active-header-friend" : ""
                          }`}
                        >
                          Phê duyệt
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
                    <div className="friend-content">
                      <div className="row">
                        {list}
                      </div>
                    </div>
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
  members: state.group.members,
  size: state.group.sizeM,
  currentPage: state.group.currentPageM,
  totalPage: state.group.totalPageM,
});

const mapDispatchToProps = (dispatch) => ({
  getMember: (id, sizeP, pageP, searchP) => dispatch(Actions.getMemberGroupAction(id, sizeP, pageP, searchP)),
  getJoin: (id, sizeP, pageP, searchP) => dispatch(Actions.getJoinGroupAction(id, sizeP, pageP, searchP)),
});

GroupMember.defaultProps = {
  members: [],
  size: 0,
  currentPage: 0,
  totalPage: 0,
};

GroupMember.propTypes = {
  getMember: PropTypes.func.isRequired,
  getJoin: PropTypes.func.isRequired,
  members: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  size: PropTypes.number,
  currentPage: PropTypes.number,
  totalPage: PropTypes.number,
};
export default connect(mapStateToProps, mapDispatchToProps)(GroupMember);
