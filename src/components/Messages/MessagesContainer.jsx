import { newDialogActionCreator, updateDialogActionCreator } from '../../redux/messages-reducer';
import Messages from './Messages';
import {connect} from 'react-redux';
import {authWithRedirect} from '../../hoc/authRedirect'
import {compose} from 'redux'

let mapStateToProps = (state) => {
    return {
        messagesData: state.messages.messagesData,
        newDialogText: state.messages.newDialogText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        createDialog: (text) => {
            dispatch(newDialogActionCreator(text))
        },

        onDialogChange: (text) => {
            dispatch(updateDialogActionCreator(text));
        }
    }
}

// let redirectWithAuth = authWithRedirect(Messages)

// const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(redirectWithAuth)

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    authWithRedirect
)(Messages)