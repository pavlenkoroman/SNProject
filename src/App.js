import React from 'react';
import style from './App.module.css';
import Sidebar from './components/Sidebar/Sidebar';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer'
import { Route } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

function App(props) {
  return (
    <div className={style.appWrapper}>
      <HeaderContainer />

      <div className={style.appContent}>
        <Sidebar />
        <Route path='/profile/:userID?' render={() => <ProfileContainer/>} />
        <Route path='/messages' render={() => <MessagesContainer/>} />
        <Route path='/users' render={() => <UsersContainer />} />
        <Route path='/login' render={() => <Login />} />
      </div>

    </div>
  );
}

export default App;
