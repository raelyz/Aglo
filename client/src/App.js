import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar/navbar";
import DashBoard from './Components/DashBoard/dashboard';
import PrivacyPolicy from './Components/Navbar/privacypolicy';
import TermsOfService from './Components/Navbar/termsofservice';
import About from './Components/Navbar/about';
import axios from 'axios';
import Editsub from './Components/Navbar/editSub';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [user, setUser] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [_id, setId] = useState('');
  const responseSuccessGoogle = (response) => {
    setAccessToken(response.accessToken)
    axios({
      method: "POST",
      url: "/users/googlelogin",
      data: { tokenId: response.tokenId },
      withCredentials: true,
      credentials: 'include',
    }).then(response => {
      console.log(response);
      setUser(response.data.name);
      setId(response.data._id)
    }).catch(err => console.log(err))
  }
  const logout = (response) => {
    setId('')
    setUser('')
    setAccessToken('')
    console.log(response)
  }
  const responseErrorGoogle = (response) => {
    console.log(response);
  }
  const props = { user, _id }
  return (
    <>
      <Router>
        <Navbar user={user} responseSuccessGoogle={responseSuccessGoogle} responseErrorGoogle={responseErrorGoogle} logout={logout} />
        <Switch>
          <Route path="/TermsofService" render={() => (< TermsOfService user={user} />)} />
          <Route path="/PrivacyPolicy" render={() => (< PrivacyPolicy user={user} />)} />
          <Route path="/About" render={() => (< About user={user} />)} />
          <Route path="/editsub" render={() => (<Editsub props={props} />)} />
          <Route exact path='/' render={() => (< DashBoard props={props} accessToken={accessToken} />)} />
        </Switch>
      </Router>
    </>

  );
}

export default App;

