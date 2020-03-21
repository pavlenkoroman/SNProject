import Posts from './Posts';
import { newPost, updatePost } from '../../../redux/profile-reducer';
import {connect} from 'react-redux'
let mapStateToProps = (state) => {
    return {
        postsData: state.profile.postsData,
        newPostText: state.profile.newPostText
    }
}

const PostsContainer = connect(mapStateToProps, {
    newPost, updatePost
})(Posts);

export default PostsContainer;