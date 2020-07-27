import React from 'react';
import style from './App.module.css';
import Sidebar from './components/Sidebar/Sidebar';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer'
import { Route, withRouter, Router } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { InitializeApp } from './redux/app-reducer'
import { compose } from 'redux';
import Loader from './common/Loader/Loader';
import { getInitializationInfo } from './redux/app-selectors';

class App extends React.Component {

  componentDidMount() {
    this.props.InitializeApp()
  }

  render() {
    if (!this.props.initialized) { return <Loader /> }

    return (
        <div className={style.appWrapper}>
          <HeaderContainer />

          <div className={style.appContent}>
            <Sidebar />
            <Route path='/profile/:userID?' render={() => <ProfileContainer />} />
            <Route path='/messages' render={() => <MessagesContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/login' render={() => <Login />} />
          </div>

        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: getInitializationInfo(state)
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, { InitializeApp }))(App);
