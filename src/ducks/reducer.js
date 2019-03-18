const initialState = {
    id: 0,
    username: ''
}

const UPDATE_USER = 'UPDATE_USER'
const CLEAR_USER = 'CLEAR_USER'

export function updateUser(user) {
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export function clearUser() {
    return {
        type: CLEAR_USER
    }
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case UPDATE_USER:
            const { id, username } = payload
            return { ...state, id, username }
        case CLEAR_USER:
            return { ...state, id:0, username: '' }
        default:
            return state
    }
}