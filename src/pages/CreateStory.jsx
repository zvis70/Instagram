import { useEffect } from 'react'
// import { useSelector } from 'react-redux'
import React, { useState } from 'react';
import { SvgComponent } from '../cmps/SvgComponent';
import { storyService } from '../services/story.service.local';
import { loggedInUser } from '../services/auth.service';
import { ImgUploader } from '../cmps/ImgUploader'


export const CreateStory = ({ setIsCreateStoryModalOpen }) => {
    const [story, setStory] = useState(storyService.getEmptyStory());
    // const [imgUrl, setImgUrl] = useState('')
    const [storyContent, setStoryContent] = useState('')


    function onUploaded(imgUrl) {
        setStory(prevStory => ({ ...prevStory, _id: '', txt: storyContent, by: { _id: loggedInUser._id, username: loggedInUser.username, fullname: loggedInUser.fullname, imgUrl: loggedInUser.imgUrl }, imgUrl: imgUrl, createdAt: Date.now() }))
    }
    // setStory(prevStory => ({ ...prevStory, _id: '', createdAt: Date.now(), by._id: loggedInUser._id, story.by.username: loggedInUser.username, story.by.fullname: loggedInUser.fullname, story.imgUrl: imgUrl }))
    console.log('story:', story);

    const handleEscape = (ev) => {
        ev.stopPropagation()
        if (ev.key === 'Escape') onCloseModal()
    }

    const onCloseModal = (ev) => {
        ev.stopPropagation()
        setIsCreateStoryModalOpen(false)
    }

    useEffect(() => {
        document.addEventListener('keydown', handleEscape)
        return () => {
            document.removeEventListener('keydown', handleEscape)
        }
    }, [])


    const handleChange = (event) => {

        setStoryContent(event.target.value);
    };

    const handleSubmit = () => {
        // Handle submitting the story content (e.g., sending to server)
        // Then close the modal
        onCloseModal();
    };

    const handleModalClick = (event) => {
        // Prevent closing modal if clicked inside the modal content
        event.stopPropagation()
    }

    return (
        <div className='div-all-screen-shade' onClick={onCloseModal}>
            <div className="modal-frame">
                <div className="modal" onClick={handleModalClick}>
                    <div className='create-story-modal-title'>
                        {/* <div className='back-arrow'onClick={onBackArrow}>←</div> */}
                        <h2 className="modal-title">Create new post</h2>
                    </div>
                    {/* <div className='create-story-modal'> */}


                    <div className='story-input-container'>
                        <textarea
                            placeholder="Write your story here..."
                            value={storyContent}
                            onChange={handleChange}
                            className="story-input"
                        />
                    </div>
                    <button onClick={handleSubmit} className="submit-button">Add Story</button>
                    <button onClick={onCloseModal} className="close-button">Close</button>

                    <div className='create-story-modal-bottom'>
                        <div className='svg-picture'><SvgComponent svgName={'create_new_post'} className='' /></div>
                        <div><h1>Drag photos and videos here</h1></div>
                        <div><button>select from computer</button></div>
                        <ImgUploader onUploaded={onUploaded} />
                    </div>
                </div>
            </div>
        </div>
    )
}










