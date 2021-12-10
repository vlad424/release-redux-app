export const initialState = {
    posts: [
        {content: "test"},
        {content: "test"},
    ]
}

const ADD_POST = "ADD_POST"

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: 
            return {...state, posts: [...state.posts, action.payload]}
        default:
            return state
    }
}

export default reducer
