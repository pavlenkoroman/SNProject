import React from 'react';
import style from './users.module.css'
import noAvatar from './../../assets/noAvatar.png'
import * as axios from 'axios';
import { NavLink } from 'react-router-dom';
import { usersAPI } from './../../api/api'
const Users = (props) => {
   let usersList = props.usersData.map(
      (user) => {
         return (
            <div className={style.user}>
               <NavLink to={'/profile/' + user.id}>
                  <div className={style.userAvatar}>
                     <img src={!user.avatar ? noAvatar : user.avatar} alt="" />
                  </div>
               </NavLink>
               <div className={style.userName}>
                  <NavLink to={'/profile/' + user.id}>{user.name}</NavLink>
               </div>
               {user.followed ?

                  <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                     props.toggleFollowingProgress(true, user.id)
                     usersAPI.unfollowRequest(user.id)
                        .then((response) => {
                           if (response.data.resultCode == 0) {
                              props.usersUnfollow(user.id);
                              props.toggleFollowingProgress(false, user.id)
                           }
                        })
                  }
                  }>Unfollow</button>
                  :

                  <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                     props.toggleFollowingProgress(true, user.id)
                     usersAPI.followRequest(user.id)
                        .then((response) => {
                           if (response.data.resultCode == 0) {
                              props.usersFollow(user.id)
                              props.toggleFollowingProgress(false, user.id)
                           }
                        })
                  }}>Follow</button>}
            </div>)
      }
   )
   let totalUsers = props.totalUsers
   let onOnePage = props.onOnePage
   let pagesCount = Math.ceil(totalUsers / onOnePage);
   let pages = [];

   for (let i = 1; i <= pagesCount && i <= 15; i++) {
      pages.push(i);
   }

   let pagesList = pages.map(
      page => {
         return (
            <span className={props.currentPage === page && style.active}
               onClick={() => {
                  props.onPageClick(page)
               }}>{page}</span>
         )
      }
   )

   return (
      <div>
         <div className={style.users}>{usersList}</div>
         <div className={style.paginator}>
            {pagesList}
         </div>
      </div>
   )
}

export default Users;