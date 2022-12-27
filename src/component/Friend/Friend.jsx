import React, { useEffect } from "react";
import RightBar from "../Home/RightBar";
import LeftBar from "../Home/LeftBar";
import "./css/friend.css";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Actions from "../../store/actions";
import ApprovalTab from "./ApprovalTab";
import AddTab from "./AddTab";

const Friend = ({
  friends,
  getFriend,
  getNotFriend,
  getApproval,
  size,
  currentPage,
  totalPage,
}) => {
  const params = useParams();
  let list = null;
  useEffect(() => {
    list = null;
    if (params.id === "my") {
      getFriend(10, 1);
    }
    if (params.id === "add") {
      getNotFriend(10, 1);
    }
    if (params.id === "approval") {
      getApproval(10, 1);
    }
  }, [params.id]);
  if (params.id === "my") {
    list = friends.map((friend, index) => {
      return (
        <div className="col-lg-6" key={index}>
          <div className="friend-info-item">
            <div className="friend-info-item-div">
              <img
                className="friend-avatar-item"
                src={`http://localhost:3013/user/image/${
                  friend.ban && friend.ban.avatar
                }`}
                alt=""
              />
            </div>
            <div className="friend-item-des-div" style={{ width: "150px" }}>
              <Link
                to={`/slytherin/profile/${friend.ban && friend.ban.username}`}
                title=""
              >
                {friend.ban && friend.ban.username}
              </Link>
              <p className="friend-item-des">
                {friend.ban && friend.ban.description}
              </p>
            </div>
            {/* {params.id === "add" && (
              <div className="btn-friend-add">
                <button>Kết bạn</button>
              </div>
            )} */}
          </div>
        </div>
      );
    });
  }
  if (params.id === "add") {
    list = friends.map((friend, index) => {
      return (
        <AddTab 
          key={index}
          id={friend.id}
          avatar={friend.avatar}
          username={friend.username}
          description={friend.description}
        />
      );
    });
  }
  if (params.id === "approval") {
    list = friends.map((friend, index) => {
      return (
        <ApprovalTab 
          key={index}
          ban={friend.ban}
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
                      <div className="friend-header-text-friend">
                        <Link
                          to="/slytherin/friend/my"
                          className={`${
                            params.id === "my" ? "active-header-friend" : ""
                          }`}
                        >
                          Bạn bè
                        </Link>
                      </div>
                      <div className="friend-header-text-app">
                        <Link
                          to="/slytherin/friend/approval"
                          className={`${
                            params.id === "approval"
                              ? "active-header-friend"
                              : ""
                          }`}
                        >
                          Phê duyệt
                        </Link>
                      </div>
                      <div className="friend-header-text-add">
                        <Link
                          to="/slytherin/friend/add"
                          className={`${
                            params.id === "add" ? "active-header-friend" : ""
                          }`}
                        >
                          Thêm bạn bè
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
                      <div className="row">{list}</div>
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
  friends: state.friend.friends,
  size: state.friend.size,
  currentPage: state.friend.currentPage,
  totalPage: state.friend.totalPage,
});

const mapDispatchToProps = (dispatch) => ({
  getFriend: (sizeP, pageP) => dispatch(Actions.getFriendAction(sizeP, pageP)),
  getNotFriend: (sizeP, pageP) =>
    dispatch(Actions.getNotFriendAction(sizeP, pageP)),
  getApproval: (sizeP, pageP) =>
    dispatch(Actions.getApprovalAction(sizeP, pageP)),
});

Friend.defaultProps = {
  friends: [],
  size: 0,
  currentPage: 0,
  totalPage: 0,
};

Friend.propTypes = {
  getFriend: PropTypes.func.isRequired,
  getNotFriend: PropTypes.func.isRequired,
  getApproval: PropTypes.func.isRequired,
  friends: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  size: PropTypes.number,
  currentPage: PropTypes.number,
  totalPage: PropTypes.number,
};
export default connect(mapStateToProps, mapDispatchToProps)(Friend);
