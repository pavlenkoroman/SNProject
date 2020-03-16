import React from 'react';
import style from './users.module.css'
import User from './User/User';
import * as axios from "axios"

class Users extends React.Component {

   constructor(props) {
      super(props);

      axios.get("https://social-network.samuraijs.com/api/1.0/users")
         .then(response => {
            this.props.setUsers(response.data.items)
         })
   }

   render() {
      let usersList = this.props.usersData.map(
         user => <User avatar={user.photos.large} id={user.id} name={user.name} status={user.status} />
      )
      return (

         <div className={style.users}>{usersList}</div>
      )

   }

}

export default Users;