export const SET_STORIES = 'SET_STORIES'
export const REMOVE_STORY = 'REMOVE_STORY'
export const ADD_STORY = 'ADD_STORY'
export const UPDATE_STORY = 'UPDATE_STORY'
export const ADD_LIKE = 'ADD_LIKE';

// export const ADD_TO_CART = 'ADD_TO_CART'
// export const CLEAR_CART = 'CLEAR_CART'
// export const UNDO_REMOVE_STORY = 'UNDO_REMOVE_STORY'
// export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

const initialState = {
    stories: [],
    filterBy: null,
    // cart: [],
    // lastRemovedStory: null
}

export function storyReducer(state = initialState, action) {
    var newState = state
    var stories
    // var cart
    switch (action.type) {
        case SET_STORIES:
            newState = { ...state, stories: action.stories }
            break
        case REMOVE_STORY:
            const lastRemovedStory = state.stories.find(story => story._id === action.storyId)
            stories = state.    stories.filter(story => story._id !== action.storyId)
            newState = { ...state, stories, lastRemovedStory }
            break
        case ADD_STORY:
            newState = { ...state, stories: [...state.stories, action.story] }
            break
        case UPDATE_STORY:
            stories = state.stories.map(story => (story._id === action.story._id) ? action.story : story)
            newState = { ...state, stories }
            break
        
        default:
    }
    return newState
}
        