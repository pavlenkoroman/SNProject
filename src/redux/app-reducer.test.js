import appReducer, { setInitializationStatus } from './app-reducer'

let state = {
    initialized: false
}

it('Initialization status should be changed', () => {

    let newState = appReducer(state, setInitializationStatus());

    expect(newState.initialized).toBe(true);
    
})