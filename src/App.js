import React from 'react';
import './App.css';
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
 
      <div className='app-wrapper'>
             <Header />
          <Sidebar />

          <div className="app-content">
            <Route path='/profile' render={ () => <Profile postsData = {props.postsData} /> } />
            <Route path='/messages' render={ () => <Messages messagesData={props.messagesData}/> } />
            <Route path='/news' render={ () => <News /> } />
            <Route path='/settings' render={ () => <Settings /> } />
          </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
