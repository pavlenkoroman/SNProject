import { newDialogActionCreator } from '../../redux/messages-reducer';
import Messages from './Messages';
import {connect} from 'react-redux';
import {authWithRedirect} from '../../hoc/authRedirect'
import {compose} from 'redux'
import { getMessagesData, getNewDialogText } from '../../redux/messages-selectors';

let mapStateToProps = (state) => {
    return {
        messagesData: getMessagesData(state),
        newDialogText: getNewDialogText(state),
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        createDialog: (text) => {
            dispatch(newDialogActionCreator(text))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    authWithRedirect
)(Messages)