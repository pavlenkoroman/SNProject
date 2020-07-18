import React from 'react';
import style from './Profile.module.css'
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className="my-profile">
      <ProfileInfo profileInfo={props.profileInfo} statusText={props.statusText} updateStatus={props.updateStatus}/>
      <Posts postsData={props.postsData} newPostText={props.newPostText} newPost={props.newPost}/>
    </div>
  );
}
export default Profile;