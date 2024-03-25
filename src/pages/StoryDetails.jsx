import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { SvgComponent } from '../cmps/SvgComponent'
import { StoryPreview } from '../cmps/StoryPreview'

import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadStories } from '../store/story.actions'




export function StoryDetails() {
  const stories = useSelector(storeState => storeState.storyModule.stories)
  const [story, setStory] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  console.log('params', params)
  console.log('stories', stories)

  useEffect(() => {
    const StoryToDisplay = stories.find(story => story._id === params.storyid)
    setStory(StoryToDisplay)
    console.log('StoryToDisplay', StoryToDisplay)

  }, [stories])

  useEffect(() => {
    loadStories()
  }, [])

console.log('story', story)

  return (
   
    <div className='story-details-container'>
      
      <div className='story-details-media'>
        {story?._id}
      </div>


      <div className='story-details-comments'>

      </div>


    </div>

  )
}
