import { newDialogActionCreator, updateDialogActionCreator } from '../../redux/messages-reducer';
import Messages from './Messages';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        messagesData: state.messages.messagesData,
        newDialogText: state.messages.newDialogText
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

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;