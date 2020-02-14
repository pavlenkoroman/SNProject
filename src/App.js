import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MyProfile from './components/MyProfile';
import Footer from './components/Footer';

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
