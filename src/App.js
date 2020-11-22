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

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/slytherin" />
        <Route path="/slytherin/login" component={Login}></Route>
        <Route path="/slytherin/register" component={Register}></Route>
        <Layout>
          <Route exact={true} path="/slytherin" component={Home}></Route>
          <Route path="/slytherin/chat" component={Chat}></Route>
          <Route path="/slytherin/profile/:username" component={Profile}></Route>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
