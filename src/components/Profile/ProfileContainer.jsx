import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import Profile from './Profile'
import {newPost, updatePost, setUserProfile} from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';

class ProfileCont extends React.Component {
    render() {
        return(
            <Profile {...this.props} profileInfo={this.props.profileInfo}/>
        )
    }

    componentDidMount() {
        let userID = this.props.match.params.userID;

        if(!userID) {
            userID = 6566;
        }

        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userID)
        .then(
            (response) => {
                this.props.setUserProfile(response.data);
            }
        )
    }

} 

let mapStateToProps = (state) => {
    return {
        profileInfo: state.profile.profileInfo
    }
}

let ProfileContWithURL = withRouter(ProfileCont)

export default  connect(mapStateToProps, {
    newPost, updatePost, setUserProfile
})(ProfileContWithURL)