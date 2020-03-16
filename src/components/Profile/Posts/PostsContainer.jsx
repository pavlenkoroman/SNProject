import Posts from './Posts';
import { newPostActionCreator, updatePostActionCreator } from '../../../redux/profile-reducer';
import {connect} from 'react-redux'
let mapStateToProps = (state) => {
    return {
        postsData: state.profile.postsData,
        newPostText: state.profile.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        createPost: (text) => {
            let action = newPostActionCreator(text);
            dispatch(action);
        },

        onPostChange: (text) => {
            let action = updatePostActionCreator(text)
            dispatch(action);
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;