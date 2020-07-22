const { default: dialogsReducer, newDialogActionCreator } = require("./messages-reducer")

let state = {
    messagesData: [
        { id: 1, name: 'Ronald', lastMessage: 'DURKA' },
        { id: 2, name: 'Steve', lastMessage: 'Hi' },
        { id: 3, name: 'Adolf', lastMessage: 'Zieg' },
        { id: 4, name: 'Dave', lastMessage: 'Maybe some beer?' },
        { id: 5, name: 'Don', lastMessage: 'Hell' }
    ]
}

it('new post should be added in state', () => {
    let newState = dialogsReducer(state, newDialogActionCreator(`hi`))

    expect(newState.messagesData.length).toBe(6)
    expect(newState.messagesData[5].lastMessage).toBe(`hi`)
})