import React from 'react';
import avatar from './../../avatar.jpg';
import style from './Profile.module.css'
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = function (props) {
  return (
    <div className="my-profile">
      <ProfileInfo/>
      <Posts p={props.postsData} newPost={props.newPost}/>
    </div>
  );
}

export default Profile;