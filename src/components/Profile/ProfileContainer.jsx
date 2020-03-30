import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile'
import { getProfile } from './../../redux/profile-reducer';
import { withRouter, Redirect } from 'react-router-dom';

class ProfileCont extends React.Component {

    render() {
        return (
            this.props.isLoggedIn
                ? <Profile {...this.props} profileInfo={this.props.profileInfo} />
                : <Redirect to='/login'/>
        )
    }

    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = 6566;
        }

        this.props.getProfile(userID)
    }

}

let mapStateToProps = (state) => {
    return {
        profileInfo: state.profile.profileInfo,
        isLoggedIn: state.auth.isLoggedIn
    }
}

let ProfileContWithURL = withRouter(ProfileCont)

export default connect(mapStateToProps, {
    getProfile
})(ProfileContWithURL)