import React from 'react';
import './Sidebar.css'
import { NavLink } from 'react-router-dom';
const Sidebar = function() {
    return(
      <div className="sidebar">
      <ul>
        <li><NavLink to="/profile">Profile</NavLink></li>
        <li><NavLink to="/messages">Messages</NavLink></li>
        <li><NavLink to="/news">News</NavLink></li>
        <li><NavLink to="/settings">Settings</NavLink></li>
      </ul>
    </div>
    );
}

export default Sidebar;