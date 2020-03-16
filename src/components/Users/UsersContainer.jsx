import Users from './Users';
import {usersFollowAC, usersUnfollowAC, setUsersAC} from './../../redux/users-reducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        usersData : state.users.usersData
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer