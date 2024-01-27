import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { storyService } from '../services/story.service.local';

// import { loadStories, addStory, updateStory, removeStory } from '../store/story.actions.js'
// import { storyService } from '../services/story.service.local.js';
import { StoryList } from "../cmps/StoryList";
import { TopReels } from '../cmps/TopReels';



export function StoryIndex() {
    const [stories, setStories] = useState(null)
    const [filterBy, setFilterBy] = useState(storyService.getDefaultFilter())


    useEffect(() => {
        loadStories()
    }, [filterBy])

    async function loadStories() {
        const stories = await storyService.query(filterBy)
        setStories(stories)
    }

    async function onRemoveStory(storyId) {
        try {
            await storyService.remove(storyId)
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
    if (!stories) return <div>Loading...</div>
    //const { model, minBatteryStatus } = filterBy

    return (
        <section className='grid-main-area flex'>
            <section className='main'> hello from main
                <section className='story-index'>
                   <TopReels />
                    {/* <StoryFilter filterBy={{ model, minBatteryStatus }} onSetFilter={onSetFilter} /> */}
                    <StoryList stories={stories} onRemoveStory={onRemoveStory} />
                </section>
            </section>
            <section className='right-side'> 
            <div className='right-side-active-area'>
            <div className='right-side-user-profile'>top</div>
            <div className='right-side-Suggested-for-you'>cnter</div>
            <div className='right-side-footer'>bottom</div>
            </div>
            </section>
        </section>
    )

}