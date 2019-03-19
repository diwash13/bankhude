const initialState = {
    id: 0,
    username: '',
    total: 0
}

const UPDATE_USER = 'UPDATE_USER'
const CLEAR_USER = 'CLEAR_USER'
const UPDATE_TOTAL= 'UPDATE_TOTAL'

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

export function updateTotal(total) {
    return {
        type: UPDATE_TOTAL,
        payload: total
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
        case UPDATE_TOTAL: 
            return { ...state, total: payload }
        default:
            return state
    }
}