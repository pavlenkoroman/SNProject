import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Messages from './components/Messages/Messages';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';


function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>

        <Header />

        <Sidebar />

        <div className="app-content">
          <Route path='/profile' component={Profile} />
          <Route path='/messages' component={Messages} />
          <Route path='/news' component={News} />
          <Route path='/settings' component={Settings} />
        </div>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
