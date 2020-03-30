import React from 'react';
import Users from './Users';
import { usersFollow, usersUnfollow, setUsers, setPagesCounter, getTotalUsers, toggleLoader, toggleFollowingProgress } from './../../redux/users-reducer';
import { connect } from 'react-redux';
import Loader from '../../common/Loader/Loader';
import { usersAPI } from './../../api/api';
import { initialUserlistRender } from '../../redux/users-reducer';

class UsersCont extends React.Component {

    componentDidMount() {

        this.props.initialUserlistRender(this.props.onOnePage, this.props.currentPage);

        // this.props.toggleLoader(true);
        // getUsers(this.props.onOnePage, this.props.currentPage,)
        //     .then(data => {
        //         this.props.setUsers(data.items)
        //         this.props.getTotalUsers(data.totalCount)
        //         this.props.toggleLoader(false);
        //     })
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
        {this.props.isLoading === true ? <Loader/> : null}
        <Users totalUsers={this.props.totalUsers}
            usersData={this.props.usersData}
            onOnePage={this.props.onOnePage}
            currentPage={this.props.currentPage}
            onPageClick={this.onPageClick}
            usersFollow={this.props.usersFollow}
            usersUnfollow={this.props.usersUnfollow}
            toggleFollowingProgress={this.props.toggleFollowingProgress}
            followingInProgress = {this.props.followingInProgress}
        />
        </>
        )
    }
    
}

let mapStateToProps = (state) => {
    return {
        usersData: state.users.usersData,
        totalUsers: state.users.totalUsers,
        onOnePage: state.users.onOnePage,
        currentPage: state.users.currentPage,
        isLoading: state.users.isLoading,
        followingInProgress: state.users.followingInProgress
    }

}

export default connect(mapStateToProps, {
    usersFollow, usersUnfollow, setUsers, setPagesCounter, getTotalUsers, toggleLoader, toggleFollowingProgress, initialUserlistRender})(UsersCont);