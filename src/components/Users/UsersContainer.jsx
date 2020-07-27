import React from 'react';
import Users from './Users';
import {setUsers, setPagesCounter, getTotalUsers, toggleLoader, toggleFollowingProgress, followProcess, unfollowProcess } from './../../redux/users-reducer';
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

    onPageClick = async (page) => {
        this.props.toggleLoader(true);
        this.props.setPagesCounter(page)
        let data = await usersAPI.getUsers(this.props.onOnePage, page,)
                this.props.setUsers(data.items)
                this.props.toggleLoader(false);
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
                    followingInProgress={this.props.followingInProgress}
                    followProcess={this.props.followProcess}
                    unfollowProcess={this.props.unfollowProcess}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
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

export default connect(mapStateToProps, 
    { setUsers, setPagesCounter, getTotalUsers, toggleLoader, initialUserlistRender, toggleFollowingProgress, followProcess, unfollowProcess})(UsersCont);