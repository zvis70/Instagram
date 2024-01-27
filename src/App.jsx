import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { MenuBar } from './cmps/MenuBar'
import { StoryIndex } from './pages/StoryIndex'

export function App() {

    return (
        <section className='main-app main-grid-container'>
            <MenuBar className='grid-aside-areas' />
            <Routes>
                <Route path="/" element={<StoryIndex />} />
                {/* <Route path="/stories" element={<StoryIndex />} /> */}
            </Routes>
        </section>

    )
}


