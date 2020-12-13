import React, { useState, useEffect } from "react";
import RightBar from "../Home/RightBar";
import LeftBar from "../Home/LeftBar";
import { Link, useParams } from "react-router-dom";

const GroupMember = ({}) => {
  const params = useParams();
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
                      <div className="friend-header-text-friend" style={{width: "120px"}}>
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
                            params.type === "app"
                              ? "active-header-friend"
                              : ""
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

                        <div className="col-lg-6">
                          <div className="friend-info-item">
                            <div className="friend-info-item-div">
                              <img
                                className="friend-avatar-item"
                                src={`http://localhost:3013/user/image/1606399014697-upload-love_nameplate_inscription_117827_3840x2160.jpg`}
                                alt=""
                              />
                            </div>
                            <div className="friend-item-des-div">
                              <Link
                                to={`/slytherin/profile/slytherin`}
                                title=""
                              >
                                Slytherin
                              </Link>
                              <p className="friend-item-des">
                                Gió đưa cây cải về trời
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="friend-info-item">
                            <div className="friend-info-item-div">
                              <img
                                className="friend-avatar-item"
                                src={`http://localhost:3013/user/image/1606399014697-upload-love_nameplate_inscription_117827_3840x2160.jpg`}
                                alt=""
                              />
                            </div>
                            <div className="friend-item-des-div">
                              <Link
                                to={`/slytherin/profile/slytherin`}
                                title=""
                              >
                                Slytherin
                              </Link>
                              <p className="friend-item-des">
                                Gió đưa cây cải về trời
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="friend-info-item">
                            <div className="friend-info-item-div">
                              <img
                                className="friend-avatar-item"
                                src={`http://localhost:3013/user/image/1606399014697-upload-love_nameplate_inscription_117827_3840x2160.jpg`}
                                alt=""
                              />
                            </div>
                            <div className="friend-item-des-div">
                              <Link
                                to={`/slytherin/profile/slytherin`}
                                title=""
                              >
                                Slytherin
                              </Link>
                              <p className="friend-item-des">
                                Gió đưa cây cải về trời
                              </p>
                            </div>
                          </div>
                        </div>
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
export default GroupMember;
