import React from 'react'
//import { Routes, Route } from 'react-router'

// import routes from './routes'

// import { AppHeader } from './cmps/AppHeader'
// import { AppFooter } from './cmps/AppFooter'
// import { Profile } from './pages/Profile'
import { StoryIndex } from './cmps/StoryIndex'
import { MenuBar } from './cmps/MenuBar'

export function App() {

    return (
        <section className='main-grid-container'>

            <div className='grid-aside'>
                {/* <StoryIndex /> */}
                <MenuBar />
            </div>

            <div className='grid-main'>
                <StoryIndex />

            </div>

        </section>
    )
}


