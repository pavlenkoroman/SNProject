import React from 'react';
import style from './App.module.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';


function App(props) {
  return (
    <BrowserRouter>

      <div className={style.appWrapper}>
        <Header />

        <div className={style.appContent}>
          <Sidebar />
          <Route path='/profile' render={() => <Profile 
          state={props.getState}
          dispatch={props.dispatch}/>} />
          <Route path='/messages' render={() => <Messages
           state={props.getState} 
           dispatch={props.dispatch}/>} />
          <Route path='/news' render={() => <News />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
