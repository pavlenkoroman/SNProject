import React from 'react';
import avatar from './../../avatar.jpg';
import './MyProfile.css'
import Posts from './Posts/Posts';

const MyProfile = function () {
  return (
    <div className="my-profile">
      <div className="user-avatar">
        <img src={avatar} alt="" />
        <div className="avatar-settings">
          <button className='edit'>Edit</button>
        </div>
      </div>

      <div className="friends-list">
        friends-list
      </div>

      <div className="profile-information">
        <div className="main-info">
          <div className="user-name"><h3>Roma Pavlenko</h3></div>
          <div className="online-offline">Online</div>
        </div>
        <div className="user-status">smart kid</div>
        <hr />
        <div className="some-info">
          <div className='friends-info'>
            <a href="">84</a>
            <br />
            <p>friends</p>
          </div>
          <div className='followers-info'><a href="">84</a>
            <br />
            <p>followers</p></div>
          <div className='videos-info'><a href="">84</a>
            <br />
            <p>videos</p></div>
          <div className='audio-info'><a href="">84</a>
            <br />
            <p>audios</p></div>
        </div>

      </div>
      <Posts />
    </div>
  );
}

export default MyProfile;