import React from 'react';
import avatar from './../../../assets/noAvatar.png';
import style from './ProfileInfo.module.css'
import Loader from '../../../common/Loader/Loader';

const ProfileInfo = (props) => {
  if (!props.profileInfo) {
    return <Loader />
  }

  return (
    <div className={style.profileInfo}>

      <div className={style.mainItem}>
        <div className={style.avatar}>
          <img src={props.profileInfo.photos.large === null ? avatar : props.profileInfo.photos.large} />
        </div>
      </div>

      <div className={style.mainItem}>
        <div className={style.pageTop}>
          <h1>{props.profileInfo.fullName}</h1>
          <span className={style.status}>{props.profileInfo.aboutMe}</span>
          <hr />

          <div className={style.userInformation}>

            <div className={style.infoItem}>

              <span className={style.info}>Looking for a job:</span>
              <span>{props.profileInfo.lookingForAJob === true ? '+' : '-'}</span>

            </div>

            <div className={style.infoItem}>

              <span className={style.info}>Description:</span>
              <span>{props.profileInfo.lookingForAJobDescription}</span>

            </div>

          </div>
        </div>
      </div>

      <div className={style.extraItem}>
        Albums
      </div>

      <div className={style.extraItem}>
        Photos
      </div>
    </div>
  )
}

export default ProfileInfo;