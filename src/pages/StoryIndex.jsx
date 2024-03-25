import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
// import { storyService } from '../services/story.service.local';
import { /* addLike, */ removeStory, loadStories, updateStory } from '../store/story.actions'

// import { loadStories, addStory, updateStory, removeStory } from '../store/story.actions.js'
// import { storyService } from '../services/story.service.local.js';
import { StoryList } from "../cmps/StoryList";
import { TopReels } from '../cmps/TopReels';
import { AppFooter } from '../cmps/AppFooter';
import { loggedInUser } from '../services/auth.service';



export function StoryIndex() {
    const stories = useSelector(storeState => storeState.storyModule.stories)
    // const [isCreateStoryModalOpen, setIsCreateStoryModalOpen] = useState(false)
    // setIsCreateStoryModalOpen={setIsCreateStoryModalOpen}


    // const filterBy = useSelector(storeState => storeState.storyModule.filterBy)

    // const [stories, setStories] = useState(null)
    // const [filterBy, setFilterBy] = useState(storyService.getDefaultFilter())


    useEffect(() => {
        loadStories()
    }, [])

    // useEffect(() => {
    //     loadStories()
    // }, [filterBy])

    // async function loadStories() {
    //     const stories = await storyService.query(filterBy)
    //     setStories(stories)
    // }

    // async function onRemoveStory(storyId) {
    //     try {
    //         await storyService.remove(storyId)
    //         setStories(prevStories => {
    //             return prevStories.filter(story => story._id !== storyId)
    //         })
    //     } catch (error) {
    //         console.log('error:', error)
    //     }
    // }


    async function onRemoveStory(storyId) {
        try {
            await removeStory(storyId)

        } catch (error) {
            console.log('error:', error)
        }
    }

    async function onAddLike(story) {
        try {
            updateStory(story)

        } catch (error) {
            console.log('error while saving like:', error)
        }
    }


    function onSetFilter(filterBy) {
        setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
    }
    if (!stories) return <div>Loading...</div>
    //const { model, minBatteryStatus } = filterBy

    return (
        <section className='grid-main-area flex'>
            <section className='main'> {/* hello from main */}
                <section className='story-index'>
                    <TopReels />
                    {/* <StoryFilter filterBy={{ model, minBatteryStatus }} onSetFilter={onSetFilter} /> */}
                    <StoryList stories={stories} onRemoveStory={onRemoveStory} onAddLike={onAddLike} />

                </section>
            </section>
            <section className='right-side'>
                <div className='right-side-active-area'>
                    <div className='right-side-user-profile flex'>
                        <div className='right-side-user-profile-img flex'><img src={loggedInUser.imgUrl}/></div>

                        <div className='right-side-user-profile-userdetails'>
                            <div className='right-side-user-profile-username'>{loggedInUser.username}</div>
                            <div className='right-side-user-profile-fullname'>{loggedInUser.fullname}</div>
                        </div>
                        <div className='right-side-user-profile-switch flex'>switch</div>

                    </div>
                    <div className='right-side-Suggested-for-you'>Suggested-for
                        <div className='right-side-Suggested-for-you-in'>Suggested-in</div>
                    </div>
                    <div className='right-side-footer'>footer</div>
                </div>
            </section>
        </section>
    )

}