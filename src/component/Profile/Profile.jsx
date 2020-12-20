import React, { useEffect } from "react";
import RightBar from "../Home/RightBar";
import "./css/profile.css";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import General from "./General";
import FriendTab from "./FriendTab";
import ImageTab from "./ImageTab";
import PostForm from "../Home/PostForm";
import ProfileHeader from "./ProfileHeader";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Actions from "../../store/actions";
import PostTab from "./PostTab";

const Profile = ({
  profile,
  getSuccess,
  getFailed,
  getError,
  getProfileByUserName,
  userInfo
}) => {
  const params = useParams();
  const owner = Cookies.get("x-token-user");
  useEffect(() => {
    getProfileByUserName(params.username);
  }, []);
  return (
    <>
      <div
        className="container-fluid"
        style={{ padding: "0px", paddingTop: "55px" }}
      >
        <div className="row" style={{ margin: "0px" }}>
          <div className="col-lg-9">
            <div className="profile-content" align="center">
              <ProfileHeader
                owner={userInfo.username}
                params={params}
                id={profile.id}
                firstname={profile.firstname}
                lastname={profile.lastname}
                username={profile.username}
                avatar={profile.avatar}
                coverImage={profile.coverImage}
                description={profile.description}
                address={profile.address}
                gender={profile.gender}
                birthday={profile.birthday}
              />
              <div className="profile-body">
                <div className="row">
                  <div className="col-lg-4 ">
                    <div className="profile-body-left">
                      <General
                        description={profile.description}
                        address={profile.address}
                        gender={profile.gender}
                        birthday={profile.birthday}
                      />
                      <FriendTab friends={profile.friends} />
                      <ImageTab username={params.username}></ImageTab>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="profile-body-right">
                      {owner === params.username ? (
                        <PostForm></PostForm>
                      ) : (
                        <div className="form-guest-profile">
                          <span>Bài viết của {params.username}</span>
                        </div>
                      )}
                      <PostTab username={params.username}></PostTab>
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
  userInfo: state.user.userInfo,
  profile: state.user.profile,
  getSuccess: state.user.getByUsernameSuccessState,
  getFailed: state.user.getByUsernameFailedState,
  getError: state.user.getByUsernameErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  getProfileByUserName: (username) =>
    dispatch(Actions.getProfileByUserName(username)),
});

Profile.defaultProps = {
  profile: null,
  getError: { error: "" },
  userInfo: null,
};

Profile.propTypes = {
  getProfileByUserName: PropTypes.func.isRequired,
  profile: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  userInfo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  getSuccess: PropTypes.bool.isRequired,
  getFailed: PropTypes.bool.isRequired,
  getError: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
