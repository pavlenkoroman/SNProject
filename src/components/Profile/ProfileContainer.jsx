import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile'
import { getProfile, getStatus, updateStatus, newPost } from './../../redux/profile-reducer';
import { withRouter} from 'react-router-dom';
import { authWithRedirect } from '../../hoc/authRedirect'
import { compose } from 'redux';
import { getProfileInfo, getStatusText, getLoggedInUserId, isUserLoggedInInfo, getPostsData, getNewPostText } from '../../redux/profile-selectors';

class ProfileCont extends React.Component {

    render() {
        return (
        <Profile {...this.props} profileInfo={this.props.profileInfo} statusText={this.props.statusText} updateStatus={this.props.updateStatus} newPost={this.props.newPost}/>
        )
    }

    componentDidMount() {
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
        profileInfo: getProfileInfo(state),
        statusText: getStatusText(state),
        loggedInUserId: getLoggedInUserId(state),
        isLoggedIn: isUserLoggedInInfo(state),
        postsData: getPostsData(state),
        newPostText: getNewPostText(state)
    }
}

export default compose(
    withRouter,
    authWithRedirect,
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, newPost}))(ProfileCont)
