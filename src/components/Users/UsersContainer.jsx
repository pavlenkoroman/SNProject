import React from 'react';
import Users from './Users';
import { usersFollow, usersUnfollow, setUsers, setPagesCounter, getTotalUsers, toggleLoader, toggleFollowingProgress } from './../../redux/users-reducer';
import { connect } from 'react-redux';
import Loader from '../../common/Loader/Loader';
import { usersAPI } from './../../api/api';
import { initialUserlistRender } from '../../redux/users-reducer';
import {
    getUsersData, getUserlist, getUsersOnOnePage,
    getCurrentPageNumber, getIsLoading, getFollowingProgressInfo
}
    from '../../redux/users-selectors';

class UsersCont extends React.Component {

    componentDidMount() {

      this.props.initialUserlistRender(this.props.onOnePage, this.props.currentPage);
    }

    onPageClick = (page) => {
        this.props.toggleLoader(true);
        this.props.setPagesCounter(page)
        usersAPI.getUsers(this.props.onOnePage, page,)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.toggleLoader(false);
            })
    }


    render() {


        return (
            <>
                {this.props.isLoading === true ? <Loader /> : null}
                <Users totalUsers={this.props.totalUsers}
                    usersData={this.props.usersData}
                    onOnePage={this.props.onOnePage}
                    currentPage={this.props.currentPage}
                    onPageClick={this.onPageClick}
                    usersFollow={this.props.usersFollow}
                    usersUnfollow={this.props.usersUnfollow}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        usersData: getUsersData(state),
        totalUsers: getUserlist(state),
        onOnePage: getUsersOnOnePage(state),
        currentPage: getCurrentPageNumber(state),
        isLoading: getIsLoading(state),
        followingInProgress: getFollowingProgressInfo(state),
    }

}

export default connect(mapStateToProps, {
    usersFollow, usersUnfollow, setUsers, setPagesCounter, getTotalUsers, toggleLoader, toggleFollowingProgress, initialUserlistRender
})(UsersCont);