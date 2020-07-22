import profileReducer, { newPost, setUserProfile, setUserStatus } from './profile-reducer'

let state = {
    postsData: [
        { id: 1, name: 'Roman Pavlenko', message: "Let's do it!", likesCounter: 28 },
        { id: 2, name: 'Anonimous', message: "Hack the system!", likesCounter: 22 },
        { id: 3, name: 'Fan', message: "Awesome!", likesCounter: 30 },
        { id: 4, name: 'Fan2', message: "Nice avatar!", likesCounter: 0 },
        { id: 5, name: 'SchoolBoy', message: "Nice avatar! ", likesCounter: 2 },
        { id: 6, name: 'Roman Pavlenko', message: "Let's do it!", likesCounter: 20 }
    ],
    profileInfo: null,
    statusText: null
}

it(`new post should be added`, () => {
    let newState = profileReducer(state, newPost(`hi`))

    expect(newState.postsData.length).toBe(7)

})

it(`profile info should be setted`, () => {
    let newState = profileReducer(state, setUserProfile(
        {
            name: `Roman`,
            surname: `HLD`
        }
    ))

    expect(newState.profileInfo.name).toBe(`Roman`)
    expect(newState.profileInfo.surname).toBe(`HLD`)
})

it(`user status should be setted`, () => {
    let newState = profileReducer(state, setUserStatus(`hi`))

    expect(newState.statusText).toBe(`hi`)
})