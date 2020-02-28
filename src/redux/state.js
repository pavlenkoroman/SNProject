const NEW_POST = "NEW-POST";
const UPDATE_POST = "UPDATE-POST";
const NEW_DIALOG = "NEW-DIALOG";
const UPDATE_DIALOG = "UPDATE-DIALOG";
let store = {

    _state: {
        profile: {
            postsData: [
                { id: 1, name: 'Roman Pavlenko', message: "Let's do it!", likesCounter: 28 },
                { id: 2, name: 'Anonimous', message: "Hack the system!", likesCounter: 22 },
                { id: 3, name: 'Fan', message: "Awesome!", likesCounter: 30 },
                { id: 4, name: 'Fan2', message: "Nice avatar!", likesCounter: 0 },
                { id: 5, name: 'SchoolBoy', message: "Nice avatar! ", likesCounter: 2 },
                { id: 6, name: 'Roman Pavlenko', message: "Let's do it!", likesCounter: 20 }
            ],
            newPostText: "da"
        },
        messages: {
            messagesData: [
                { id: 1, name: 'Ronald', lastMessage: 'DURKA' },
                { id: 2, name: 'Steve', lastMessage: 'Hi' },
                { id: 3, name: 'Adolf', lastMessage: 'Zieg' },
                { id: 4, name: 'Dave', lastMessage: 'Maybe some beer?' },
                { id: 5, name: 'Don', lastMessage: 'Hell' }
            ],
            newDialogText: ""
        }
    },

    getState() {
        return this._state;
    },

    rerenderTree() {
        console.log('State changed');
    },

    subscribe(observer) {
        this.rerenderTree = observer;
    },

    newPostText: "hi",

    dispatch(action) {
        if (action.type === NEW_POST) {
            let newData = { id: 6, name: 'Roman Pavlenko', message: action.postText, likesCounter: 20 };
            this._state.profile.postsData.push(newData);
            this.rerenderTree(this._state);
        } else if (action.type === UPDATE_POST) {
            this._state.profile.newPostText = action.newText;
            this.rerenderTree(this._state)
        } else if (action.type === NEW_DIALOG) {
            let newMessagesData = { id: 6, name: 'Dave', lastMessage: action.dialogText}
            this._state.messages.messagesData.push(newMessagesData);
            this.rerenderTree(this._state);
        } else if (action.type === UPDATE_DIALOG) {
            this._state.messages.newDialogText = action.newText;
            this.rerenderTree(this._state)
        }
    },
}
export const newPostActionCreator = (text) => {
    return {
        type: NEW_POST,
        postText: text
    };
}

export const updatePostActionCreator = (text) => {
    return {
        type: UPDATE_POST,
        newText: text
    };
}

export const newDialogActionCreator = (text) => {
    return {
        type: NEW_DIALOG,
        dialogText: text
    };
}

export const updateDialogActionCreator = (text) => {
        return {
            type: UPDATE_POST,
            newText: text
        };
    }


export default store;