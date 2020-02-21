import React from 'react';
import avatar from './../../avatar.jpg';
import './Profile.css'
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = function (props) {
  return (
    <div className="my-profile">
      <ProfileInfo/>
      <Posts p={props.postsData}/>
    </div>
  );
}

export default Profile;