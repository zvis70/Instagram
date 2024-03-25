import React, { useEffect, useState } from 'react'
// import { useEffectUpdate } from '../customHooks/useEffectUpdate'
// import { useForm } from '../customHooks/useForm'


export function MenuModal({ setIsMenuModalOpen, onRemoveStory, storyId }) {

    const handleEscape = (ev) => {
        ev.stopPropagation()
        if (ev.key === 'Escape') onCloseModal()
    }

    const onCloseModal = (ev) => {
        ev.stopPropagation()
        setIsMenuModalOpen(false)
    }

    useEffect(() => {
        document.addEventListener('keydown', handleEscape)
        return () => {
            document.removeEventListener('keydown', handleEscape)
        }
    }, [])



    return (
        <div className='div-all-screen-shade' onClick={onCloseModal}>
            <div className='menu-modal'>
                {/* <h1>Our team is</h1> */}
                <ul>
                    {/* <li>Add to favorites</li> */}
                    {/* maybe*/}
                    {/* <li>Go to post</li> */}
                    <li><button className='menu-buttons' onClick={() => { setIsMenuModalOpen(false) }}>Add to favorites</button></li>
                    <li><button className='menu-buttons' onClick={() => { setIsMenuModalOpen(false) }}>Go to post</button></li>
                    
                    <li><button className='menu-buttons' onClick={() => { onRemoveStory(storyId) }}>Delete </button></li> {/* Will be shown only if is logged in  user is the same as post By...*/} {/* onClick={() => onRemoveStory(story._id)} */}
                    {/* <li>Cancel</li> */}
                    <li><button className='menu-buttons' onClick={() => { setIsMenuModalOpen(false) }}>Cancel</button></li>
                </ul>
            </div>
        </div>
    )
}
