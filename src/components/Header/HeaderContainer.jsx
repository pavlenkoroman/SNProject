import React from 'react';
import Header from './Header';
import {setAuthData, makeAuth, logout} from './../../redux/auth-reducer';
import {connect} from 'react-redux';

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />
  }

  componentDidMount() {
    this.props.makeAuth()
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

export default connect(mapStateToProps, {setAuthData, makeAuth, logout})(HeaderContainer);