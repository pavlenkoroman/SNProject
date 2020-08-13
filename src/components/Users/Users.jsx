import React from 'react';
import style from './users.module.css'
import Paginator from './Paginator/Paginator';
import { NavLink } from 'react-router-dom';
import noAvatar from './../../assets/noAvatar.png'
const Users = (props) => {
   let usersList = props.usersData.map(
      (user) => {
         let userHasNoPhoto = user.photos.small === null || user.photos.large === null;
         return (
            <div className={style.user}>
               <NavLink to={'/profile/' + user.id}>
                  <div className={style.userAvatar}>
                     <img src={userHasNoPhoto? noAvatar :  user.photos.small} />
                  </div>
               </NavLink>
               <div className={style.userName}>
                  <NavLink to={'/profile/' + user.id}>{user.name}</NavLink>
               </div>
               {user.followed ?

                  <button disabled={props.followingInProgress.some(id => id == user.id)} onClick={() => {props.unfollowProcess(user.id)}}>Unfollow </button>
                  :
                  <button disabled={props.followingInProgress.some(id => id == user.id)} onClick={() => {props.followProcess(user.id)}}>Follow</button>}
            </div>)})

   return (
      <div>
         <div className={style.paginator}>
            <Paginator totalUsers={props.totalUsers} onOnePage={props.onOnePage} onPageClick={props.onPageClick}
               currentPage={props.currentPage} toggleFollowingProgress={props.toggleFollowingProgress}
                paginatorLength={props.paginatorLength}
            />
         </div>
         <div className={style.users}>{usersList}</div>
      </div>
   )
}

export default Users;