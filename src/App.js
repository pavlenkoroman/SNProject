import React from 'react';
import style from './App.module.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import MessagesContainer from './components/Messages/MessagesContainer';
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
          <Route path='/profile' render={() => <Profile store={props.store} />} />
          <Route path='/messages' render={() => <MessagesContainer store={props.store} />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
