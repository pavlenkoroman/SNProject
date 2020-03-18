import React from 'react';
import style from './users.module.css'
import User from './User/User';

const Users = (props) => {

   let usersList = props.usersData.map(
      user => <User avatar={user.photos.large} id={user.id} name={user.name} status={user.status} />
   )
   
   let totalUsers = props.totalUsers
   let onOnePage = props.onOnePage
   let pagesCount = Math.ceil(totalUsers / onOnePage);
   let pages = [];

   for (let i = 1; i <= pagesCount && i <= 10; i++) {
      pages.push(i);
   }

   let pagesList = pages.map(
      page => { 
      return( 
      <span className={props.currentPage === page && style.active}
      onClick={() => {
         props.onPageClick(page)
      }}>{page}</span>
      )}
   )

   return(
      <div>
      <div className={style.users}>{usersList}</div>
      <div className={style.paginator}>
            {pagesList}
      </div>
      </div>
   )
}

export default Users;