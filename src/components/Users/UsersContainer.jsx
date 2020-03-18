import React from 'react';
import * as axios from "axios"
import Users from './Users';
import { usersFollowAC, usersUnfollowAC, setUsersAC, setPagesCounterAC, getTotalUsersAC } from './../../redux/users-reducer';
import { connect } from 'react-redux';

class UsersCont extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.onOnePage}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.getTotalUsers(response.data.totalCount)
            })
    }

    onPageClick = (page) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.onOnePage}&page=${[page]}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {


        return <Users totalUsers={this.props.totalUsers}
            usersData={this.props.usersData}
            onOnePage={this.props.onOnePage}
            currentPage={this.props.currentPage}
            onPageClick={this.onPageClick}
        />

    }

}

let mapStateToProps = (state) => {
    return {
        usersData: state.users.usersData,
        totalUsers: state.users.totalUsers,
        onOnePage: state.users.onOnePage,
        currentPage: state.users.currentPage
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(usersFollowAC(userId));
        },

        unfollow: (userId) => {
            dispatch(usersUnfollowAC(userId));
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },

        setCurrentPage: (page) => {
            dispatch(setPagesCounterAC(page))
        },

        getTotalUsers: (totalUsers) => {
            dispatch(getTotalUsersAC(totalUsers))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersCont);
export default UsersContainer