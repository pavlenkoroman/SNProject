import React from 'react';
import './Sidebar.css'
const Sidebar = function() {
    return(
      <div className="sidebar">
      <ul>
        <li><a href="">Profile</a></li>
        <li><a href="">Messages</a></li>
        <li><a href="">News</a></li>
        <li><a href="">Settings</a></li>
      </ul>
    </div>
    );
}

export default Sidebar;