const NEW_POST = "NEW-POST";
const UPDATE_POST = "UPDATE-POST";

let initialState = {
    postsData: [
        { id: 1, name: 'Roman Pavlenko', message: "Let's do it!", likesCounter: 28 },
        { id: 2, name: 'Anonimous', message: "Hack the system!", likesCounter: 22 },
        { id: 3, name: 'Fan', message: "Awesome!", likesCounter: 30 },
        { id: 4, name: 'Fan2', message: "Nice avatar!", likesCounter: 0 },
        { id: 5, name: 'SchoolBoy', message: "Nice avatar! ", likesCounter: 2 },
        { id: 6, name: 'Roman Pavlenko', message: "Let's do it!", likesCounter: 20 }
    ],
    newPostText: "da"
}

const postsReducer = (state = initialState, action) => {

    switch (action.type) {
        case NEW_POST:
            let newPostData = { id: 7, name: 'Roman Pavlenko', message: action.postText, likesCounter: 0 };
            state.postsData.push(newPostData);
            return state;

        case UPDATE_POST:
            state.newPostText = action.newText;
            return state;
    }
    return state;

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
export default postsReducer