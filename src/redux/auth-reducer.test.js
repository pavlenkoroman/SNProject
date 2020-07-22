const { default: authReducer, setAuthData } = require("./auth-reducer")

let state = {
    id: null,
    email: null,
    login: null,
    isLoggedIn: false,
}

it('auth data should be setted', () => {
    let newState = authReducer(state, setAuthData(28, `asdasd@gmail.com`, `romapavlenko`, true))

    expect(newState.id).toBe(28)
    expect(newState.email).toBe(`asdasd@gmail.com`)
    expect(newState.login).toBe(`romapavlenko`)
    expect(newState.isLoggedIn).toBe(true)
})