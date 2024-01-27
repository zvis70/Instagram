import React from 'react'
import { StoryPreview } from './StoryPreview'

export function StoryList({ stories, onRemoveStory }) {
  return (
    <div>
      <ul className="story-list">  {/*not define yet*/}
        {stories.map(story =>
          <article className='story-item'>
            <li key={story._id}>
              <StoryPreview story={story} />
              
              <div className="story-actions">  {/*not define yet*/}
                {/* <button onClick={() => onRemoveStory(story._id)}>X</button> */}
              </div>
            </li>
            </article>
        )}
          </ul>
    </div>
  )
}
