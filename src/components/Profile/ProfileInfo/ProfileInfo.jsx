import React from 'react';
import avatar from './../../../avatar.jpg';
import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div className={style.profileInfo}>

      <div className={style.mainItem}>
        <div className={style.avatar}>
          <img src={avatar} />
          Upload new photo</div>
      </div>

      <div className={style.mainItem}>
        <div className={style.pageTop}>
          <h1>Roman Pavlenko</h1>
          <span className={style.status}>道德經</span>
          <hr/>
          <div className={style.userInformation}>
            <div className={style.infoItem}>
              <span className={style.info}>Birthday:</span>
              <span><a href="">value</a></span>
            </div>

            <div className={style.infoItem}>
              <span className={style.info}>Relationship</span>
              <span><a href="">value</a></span>
            </div>

            <div className={style.infoItem}>
              <span className={style.info}>Company:</span>
              <span><a href="">value</a></span>
            </div>

            <div className={style.infoItem}>
              <span className={style.info}>Website:</span>
              <span><a href="">value</a></span>
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