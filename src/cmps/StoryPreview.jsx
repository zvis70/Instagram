import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SvgComponent } from './SvgComponent'
import { utilService } from '../services/util.service'
import { MenuModal } from './MenuModal'
import { loggedInUser } from '../services/auth.service'

export function StoryPreview({ story, onAddLike, onRemoveStory }) {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false)
  // const [isTextTyped, setIsTextTyped] = useState(false)


  const numberOfLikes = story.likedBy.length;

  // const isLikedByCurrentUser = story.likedBy.some(user => user._id === currentUserId)
  const isLikedByCurrentUser = story.likedBy.find(user => user._id === loggedInUser._id)


  function addNewComment(story) {
    const newStory = { ...story }
    newStory.comments.push({ _id: loggedInUser._id, txt: newStory.comment, username: loggedInUser.username, fullname: loggedInUser.fullname, imgUrl: loggedInUser.imgUrl })// FIELDS
    newStory.comment = ''
    setIsTextTyped(prev => !prev)
  }

  function onToggleLike() {
    if (!isLikedByCurrentUser) {
      const newStory = { ...story }
      newStory.likedBy.push({ _id: loggedInUser._id, username: loggedInUser.username, fullname: loggedInUser.fullname, imgUrl: loggedInUser.imgUrl })
      onAddLike(newStory)
    }
    else {
      const newStory = { ...story }
      newStory.likedBy = newStory.likedBy.filter(user => user._id !== loggedInUser._id);
      onAddLike(newStory)
    }
  }

  function onToggleModal() {
    setIsMenuModalOpen(prev => !prev)
  }

  function changeStoryComment(event, story) {
    story.comment = event.target.value
    setIsTextTyped(prev => !prev)
  }


  return (
    <>
      <div className='story-header'>
        <div className='story-header-left'>
          {/* <div className='div-story-avatar'> <Avatar /> */}

          <div className='story-header-avatar'> <div className='div-story-avatar'> <img className='users-profile-img' src={story.by.imgUrl} /></div>
          </div>

          <div className='story-header-id-container flex'>
            <div className='story-header-user flex'> {story.by.username}  <span> • </span>
              <div className='story-header-time'

                // title={"Bug Id: "+bug._id+ " - "+ "Description: "+bug.description +" Created At: "+new Date(bug.createdAt).toLocaleString()}
                title={utilService.tooltipDate(story.createdAt)}
              >  {utilService.timeDurationCalc(story.createdAt)}
              </div>
            </div>

            {/* {console.log('story.createdAt', story.createdAt)} */}
            {/* tooltipDate.toLocaleDateString("he-IL", { year: 'numeric', month: 'short', day: 'numeric', weekday: 'long' }) */}
          </div>


        </div>

        <div className='story-header-right'  >

          <div className='story-header-menu' ><div className='hover-svg' onClick={onToggleModal}><SvgComponent svgName={'menu'} /></div></div>

        </div>
        {isMenuModalOpen && <MenuModal storyId={story._id} onRemoveStory={onRemoveStory} setIsMenuModalOpen={setIsMenuModalOpen} />}
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

            <div className='icon-div-size ' onClick={onToggleLike}><div className='hover-svg like-icon'> <SvgComponent svgName={isLikedByCurrentUser ? 'redLike' : 'like'} /></div></div>
            <div className='icon-div-size'> <div className='hover-svg'><SvgComponent svgName={'comment'} /></div></div>
            <div className='icon-div-size'> <div className='hover-svg'><SvgComponent svgName={'share post'} /></div></div>
          </div>

          <div className='story-action-icons-bar-right flex'>
            <div className='save-icon-div-size'> <div className='hover-svg'><SvgComponent svgName={'save'} /></div></div>
          </div>
        </div>
        <div className='story-likes'>{numberOfLikes} likes</div>
        <span className='story-title flex' >
          {/* <h1> {story.by.username}</h1> */}
          <div className='story-title-username' >
            <span><ExpandableText username={story.by.username} text={story.txt} limit={100} /></span>

          </div>
          {/* {limitChar(story.txt, 100)} */}
        </span>
        {
          story.comments && story.comments.map(comment => {
            // console.log('comment', comment)
            // console.log('story', story)
            return <div key={story.comment?._id} className='story-commet-panel'>
              <div className='story-comment flex'>
                <div className='story-comment-left'>
                  <div className='story-comment-user'> {comment.by.username} </div>

                  <div className='story-comment-text'> <pre>{comment.txt}</pre>{/* {limitChar(comment.txt, 100)} */} </div>
                </div>

                <div className='story-comment-right'>
                  <div className='comment-emoji'> <SvgComponent svgName={'like'} /></div>
                </div>
              </div>
            </div>

          })
        }



        <div className='story-textarea-panel'>
          <textarea aria-label='Add a comment...' className='story-textarea-box flex' placeholder='Add a comment...' value={story.comment} onChange={(event) => { changeStoryComment(event, story) }}></textarea>
          {story.comment && <div><button className='story-comment-post-button' onClick={() => { addNewComment(story) }}> Post </button></div>}
          <div className='comment-emoji'> <SvgComponent svgName={'emoji'} /></div>
          {/* <div className='story-comment-post-button' ></div> */}

        </div>
        {/* <img src={`${story.imgUrl}`}></img> */}

      </div>
    </>

  )
}



//////////////////////////////////////// ExpandableText ////////////////////////////////////////
function ExpandableText({ text, limit, username }) {
  const [showFull, setShowFull] = useState(false);

  const { truncated, full } = limitChar(text, limit);

  function limitChar(str, limit) {
    if (str.length > limit) {
      const truncated = `${str.slice(0, limit)}...`;
      return { truncated, full: str };
    } else {
      return { truncated: str, full: str };
    }
  }

  return (
    // 
    <div className='story-title-text'>
      <span className='username-span'> {username} </span>
      {showFull ? full : truncated}
      {truncated !== full && (
        <button onClick={() => setShowFull(!showFull)}>
          {showFull ? "  less" : "more"}
        </button>
      )}

    </div>
    // </pre>
  )
}

