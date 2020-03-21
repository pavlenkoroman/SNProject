import React from 'react';
import Header from './Header';
import *as axios from 'axios';
import {setAuthData, extraAuthUserData} from './../../redux/auth-reducer';
import {connect} from 'react-redux';

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />
  }

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials : true
    })
    .then((response) => {
      this.props.setAuthData(response.data.data.id, response.data.data.email, response.data.data.login)
    })
    .then(() => {
      if(this.props.isLoggedIn === true) {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + this.props.authUserID)
        .then((response) => {
          extraAuthUserData(response.data.photos.small)
        })
      }
    })
    } 
}

let mapStateToProps = (state) => {
  return{
    authUserID: state.auth.id,
    authUserLogin: state.auth.login,
    isLoggedIn: state.auth.isLoggedIn,
    avatar: state.auth.currentUserAvatar
  }
}

export default connect(mapStateToProps, {setAuthData})(HeaderContainer);