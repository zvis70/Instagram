import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { loadStories, addStory, updateStory, removeStory } from '../store/story.actions.js'
import { storyService } from '../services/story.service.local.js';
import { StoryList } from "../cmps/StoryList";


export function StoryIndex() {
    const [stories, setStories] = useState(null)
    const [filterBy, setFilterBy] = useState(storyService.getDefaultFilter())



    useEffect(() => {
        loadStories()
    }, [filterBy])

    async function loadStories() {
        const stories = await StoryService.query(filterBy)
        setStories(stories)
    }

    async function onRemoveStory(storyId) {
        try {
            await StoryService.remove(storyId)
            setStories(prevStories => {
                return prevStories.filter(story => story._id !== storyId)
            })
        } catch (error) {
            console.log('error:', error)
        }
    }

    function onSetFilter(filterBy) {
        setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
    }
    // if (!Stories) return <div>Loading...</div>
    // const { model, minBatteryStatus } = filterBy
    return (
        <section className="story-index">
            
            {/* <StoryFilter filterBy={{ model, minBatteryStatus }} onSetFilter={onSetFilter} /> */}
            Hello From StoryIndex
            <StoryList stories={stories} onRemoveStory={onRemoveStory} />
        </section>
    )

    // return (
    //     <div>

    //         Hello From StoryIndex
    //         <StoryList />

    //     </div>
    // )
}