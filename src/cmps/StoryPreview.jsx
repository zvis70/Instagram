
import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Avatar } from '@mui/material'
import { Save } from '@mui/icons-material'
import { SvgComponent } from './SvgComponent'


export function StoryPreview({ story }) {


  return (
    <>
      <div className='story-header'>
        <div className='div-story-avatar'> <Avatar />
          <div className='div-story-avatar_txt'>
            <h4> {story.by._id}</h4>
            <h2> {story.by.fullname}</h2>
          </div>
        </div>
      </div>

      <div className='story-media-background'>
        <Link to={`/story/${story._id}`}>
          <img src={story.imgUrl}></img>
        </Link>
      </div>


      <div className='story-footer'>
        <div className='story-action-icons-bar flex'>
          <div className='story-action-icons-bar-left flex'>
            {/* <div className='icon-div-size'> <FavoriteBorderIcon /></div> */}

            <div className='icon-div-size'> <SvgComponent svgName={'like'} /></div>
            <div className='icon-div-size'> <SvgComponent svgName={'comment'} /></div>
            <div className='icon-div-size'> <SvgComponent svgName={'share post'} /></div>
          </div>

          <div className='story-action-icons-bar-right'>
            <div className='icon-div-size'> <SvgComponent svgName={'save'} /></div>
          </div>
        </div>
        <div className='story-likes'>2 likes</div>
        <span className='story-title flex'>
          <a> {story.by.fullname}</a> {story.txt}
        </span>
        <div className='story-textarea-panel'>
          <textarea aria-label='Add a comment...' className='story-textarea-box flex' placeholder='Add a comment...' ></textarea>
          <div> <SvgComponent svgName={'emoji'} /></div>
          <div className='story-comment-post-button' ></div>

          <div></div>
        </div>
        {/* <img src={`${story.imgUrl}`}></img> */}

      </div>
    </>


  )
}


