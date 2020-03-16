const NEW_DIALOG = "NEW-DIALOG";
const UPDATE_DIALOG = "UPDATE-DIALOG";

let initialState = {
    messagesData: [
        { id: 1, name: 'Ronald', lastMessage: 'DURKA' },
        { id: 2, name: 'Steve', lastMessage: 'Hi' },
        { id: 3, name: 'Adolf', lastMessage: 'Zieg' },
        { id: 4, name: 'Dave', lastMessage: 'Maybe some beer?' },
        { id: 5, name: 'Don', lastMessage: 'Hell' }
    ],
    newDialogText: "asda"
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case NEW_DIALOG: {
            let newMessagesData = {
                id: 6,
                name: 'Dave',
                lastMessage: action.dialogText
            }
            return { ...state, messagesData: [...state.messagesData, newMessagesData], newDialogText: '' };
        }
        case UPDATE_DIALOG: {
            return { ...state, newDialogText: action.newText };
        }
    }
    return state;
}

export const newDialogActionCreator = (text) => {
    return {
        type: NEW_DIALOG,
        dialogText: text
    };
}

export const updateDialogActionCreator = (text) => {
    return {
        type: UPDATE_DIALOG,
        newText: text
    };
}

export default dialogsReducer;