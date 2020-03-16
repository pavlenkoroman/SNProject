import React from 'react';
import style from './Profile.module.css'
import PostsContainer from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = function (props) {
  return (
    <div className="my-profile">
      <ProfileInfo />
      <PostsContainer/>
    </div>
  );
}
export default Profile;