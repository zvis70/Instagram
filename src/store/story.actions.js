import { storyService } from '../services/story.service.local.js'
import { userService } from '../services/user.service.js'
import { store } from './store.js'
import { /* ADD_LIKE, */ ADD_STORY, REMOVE_STORY, SET_STORIES, UPDATE_STORY } from './story.reducer.js'

// Action Creators:
export function getActionRemoveStory(storyId) {
    return {
        type: REMOVE_STORY,
        storyId
    }
}
// export function getActionAddLike (storyId) {
//     return {
//       type: ADD_LIKE,
//         storyId      
//     }
//   }

export function getActionAddStory(story) {
    return {
        type: ADD_STORY,
        story
    }
}
export function getActionUpdateStory(story) {
    return {
        type: UPDATE_STORY,
        story
    }
}

export async function loadStories() {
    try {
        const stories = await storyService.query()
        console.log('Stories from DB:', stories)
        store.dispatch({
            type: SET_STORIES,
            stories
        })

    } catch (err) {
        console.log('Cannot load stories', err)
        throw err
    }

}

export async function removeStory(storyId) {
    try {
        await storyService.remove(storyId)
        store.dispatch(getActionRemoveStory(storyId))
    } catch (err) {
        console.log('Cannot remove story', err)
        throw err
    }
}

export async function addStory(story) {
    try {
        const savedStory = await storyService.save(story)
        console.log('Added Story', savedStory)
        store.dispatch(getActionAddStory(savedStory))
        return savedStory
    } catch (err) {
        console.log('Cannot add story', err)
        throw err
    }
}

export function updateStory(story) {
    return storyService.save(story)
        .then(savedStory => {
            console.log('Updated Story:', savedStory)
            store.dispatch(getActionUpdateStory(savedStory))
            return savedStory
        })
        .catch(err => {
            console.log('Cannot save story', err)
            throw err
        })
}

// export function addToCart(story) {
//     store.dispatch({
//         type: ADD_TO_CART,
//         story
//     })
// }

// export function removeFromCart(storyId) {
//     store.dispatch({
//         type: REMOVE_FROM_CART,
//         storyId
//     })
// }

// export async function checkout(total) {
//     try {
//         const score = await userService.changeScore(-total)
//         store.dispatch({ type: SET_SCORE, score })
//         store.dispatch({ type: CLEAR_CART })
//         return score
//     } catch (err) {
//         console.log('StoryActions: err in checkout', err)
//         throw err
//     }
// }


// Demo for Optimistic Mutation 
// (IOW - Assuming the server call will work, so updating the UI first)
export function onRemoveStoryOptimistic(storyId) {
    store.dispatch({
        type: REMOVE_STORY,
        storyId
    })
    showSuccessMsg('Story removed')

    storyService.remove(storyId)
        .then(() => {
            console.log('Server Reported - Deleted Succesfully');
        })
        .catch(err => {
            showErrorMsg('Cannot remove story')
            console.log('Cannot load stories', err)
            store.dispatch({
                type: UNDO_REMOVE_STORY,
            })
        })
}
