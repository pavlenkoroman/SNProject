import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MyProfile from './components/MyProfile/MyProfile';
import Footer from './components/Footer/Footer';

function App() {
  return(
    <div className='app-wrapper'>
    <Header/>
    
    <Sidebar/>

    <MyProfile/>

    <Footer/>
    </div>
  );
}

export default App;
