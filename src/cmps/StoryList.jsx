import React from 'react'
import { StoryPreview } from './StoryPreview'

export function StoryList({ stories, onRemoveStory,onAddLike }) {
  return (
    <div>
      <article className='story-item'>
      <ul className="story-list">  {/*not define yet*/}
        {stories.map(story =>
          
            <li key={story._id}>
              <StoryPreview story={story}    onAddLike={onAddLike} onRemoveStory={onRemoveStory} onRemoveStory={onRemoveStory}/>
              
              <div className="story-actions">  {/*not define yet*/}
                {/* <button onClick={() => onRemoveStory(story._id)}>X</button> */}
              </div>
            </li>
            
        )}
          </ul>
          </article>
    </div>
  )
}

