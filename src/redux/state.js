import ProfileReducer from "./profile-reducer"
import dialogsReducer from "./messages-reducer"

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

    dispatch(action) {

        this._state.profile = ProfileReducer(this._state.profile, action);
        this._state.messages = dialogsReducer(this._state.messages, action)
        this.rerenderTree(this._state);
    }
}

export default store;