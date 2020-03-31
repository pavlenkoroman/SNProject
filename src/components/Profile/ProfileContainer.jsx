import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile'
import { getProfile } from './../../redux/profile-reducer';
import { withRouter} from 'react-router-dom';
import { authWithRedirect } from '../../hoc/authRedirect'
import { compose } from 'redux';

class ProfileCont extends React.Component {

    render() {
        return (
        <Profile {...this.props} profileInfo={this.props.profileInfo} />
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
    }
}

export default compose(
    withRouter,
    authWithRedirect,
    connect(mapStateToProps, {getProfile}))(ProfileCont)
