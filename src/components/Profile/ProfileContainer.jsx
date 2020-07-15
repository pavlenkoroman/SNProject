import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile'
import { getProfile, getStatus, updateStatus } from './../../redux/profile-reducer';
import { withRouter} from 'react-router-dom';
import { authWithRedirect } from '../../hoc/authRedirect'
import { compose } from 'redux';

class ProfileCont extends React.Component {

    render() {
        return (
        <Profile {...this.props} profileInfo={this.props.profileInfo} statusText={this.props.statusText} updateStatus={this.props.updateStatus}/>
        )
    }

    componentDidMount() {
        debugger
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = this.props.loggedInUserId;
        }

        this.props.getStatus(userID)
        this.props.getProfile(userID)
    }

}

let mapStateToProps = (state) => {
    return {
        profileInfo: state.profile.profileInfo,
        statusText: state.profile.statusText,
        loggedInUserId: state.auth.id,
        isLoggedIn: state.auth.isLoggedIn
    }
}

export default compose(
    withRouter,
    authWithRedirect,
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}))(ProfileCont)
