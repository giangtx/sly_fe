import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import './App.css';
import Login from '../src/component/Login/Login';
import Register from '../src/component/Login/Register';
import Layout from '../src/component/Layout/Layout';
import Home from '../src/component/Home/Home';
import Chat from '../src/component/Chat/Chat';
import Profile from '../src/component/Profile/Profile';
import Post from '../src/component/Post/Post';
import Friend from '../src/component/Friend/Friend';
import Groups from "../src/component/Group/Groups";
import Group from "../src/component/Group/Group";
import GroupMember from "../src/component/Group/GroupMember";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/slytherin" />
        <Route path="/slytherin/login" component={Login}></Route>
        <Route path="/slytherin/register" component={Register}></Route>
        <Layout>
          <Route exact={true} path="/slytherin" component={Home}></Route>
          <Route path="/slytherin/chat/:id" component={Chat}></Route>
          <Route path="/slytherin/profile/:username" component={Profile}></Route>
          <Route path="/slytherin/post/:id" component={Post}></Route>
          <Route path="/slytherin/friend/:id" component={Friend}></Route>
          <Route path="/slytherin/groups/:id" component={Groups}></Route>
          <Route path="/slytherin/group/:id" component={Group}></Route>
          <Route path="/slytherin/groupmember/:id/:type" component={GroupMember}></Route>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
