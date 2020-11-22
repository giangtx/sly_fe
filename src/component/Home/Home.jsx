import React from "react";
import Content from "./Content";
import RightBar from "./RightBar";
import LeftBar from "./LeftBar";
import "./css/home.css";

const Home = () => {
  return (
    <>
      <div className="container-fluid" style={{ padding: "0px", paddingTop: "55px" }}>
        <div className="row" style={{margin: "0px"}}>
          <div className="col-lg-9">
            <div id="froum-all">
              <div className="container-fluid" style={{ padding: "0px" }}>
                <div className="row">
                  <LeftBar></LeftBar>
                  <Content></Content>
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
export default Home;
