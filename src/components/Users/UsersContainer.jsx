import React from 'react';
import * as axios from "axios"
import Users from './Users';
import { usersFollow, usersUnfollow, setUsers, setPagesCounter, getTotalUsers, toggleLoader } from './../../redux/users-reducer';
import { connect } from 'react-redux';
import Loader from '../../common/Loader/Loader';
import { withRouter } from 'react-router-dom';

class UsersCont extends React.Component {

    componentDidMount() {
        this.props.toggleLoader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.onOnePage}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.getTotalUsers(response.data.totalCount)
                this.props.toggleLoader(false);
            })
    }

    onPageClick = (page) => {
        this.props.toggleLoader(true);
        this.props.setPagesCounter(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.onOnePage}&page=${[page]}`)
            .then(response => {
                this.props.setUsers(response.data.items)
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
        isLoading: state.users.isLoading
    }

}

const UsersContainer = connect(mapStateToProps, {
    usersFollow, usersUnfollow, setUsers, setPagesCounter, getTotalUsers, toggleLoader
})(UsersCont);
export default UsersContainer