const NEW_DIALOG = "NEW-DIALOG";

let initialState = {
    messagesData: [
        { id: 1, name: 'Ronald', lastMessage: 'DURKA' },
        { id: 2, name: 'Steve', lastMessage: 'Hi' },
        { id: 3, name: 'Adolf', lastMessage: 'Zieg' },
        { id: 4, name: 'Dave', lastMessage: 'Maybe some beer?' },
        { id: 5, name: 'Don', lastMessage: 'Hell' }
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case NEW_DIALOG: {
            let newMessagesData = {
                id: 6,
                name: 'Dave',
                lastMessage: action.dialogText
            }
            return { ...state, messagesData: [...state.messagesData, newMessagesData]};
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

export default dialogsReducer;