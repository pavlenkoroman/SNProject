import React from 'react';
import style from './App.module.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer'
import { Route } from 'react-router-dom';

function App(props) {
  return (
    <div className={style.appWrapper}>
      <Header />

      <div className={style.appContent}>
        <Sidebar />
        <Route path='/profile' render={() => <Profile/>} />
        <Route path='/messages' render={() => <MessagesContainer/>} />
        <Route path='/users' render={() => <UsersContainer />} />
      </div>

    </div>
  );
}

export default App;
