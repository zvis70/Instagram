import React from 'react'
//import { Routes, Route } from 'react-router'

// import routes from './routes'

// import { AppHeader } from './cmps/AppHeader'
// import { AppFooter } from './cmps/AppFooter'
// import { Profile } from './pages/Profile'
//import { StoryIndex } from './views/StoryIndex'
import { MenuBar } from './cmps/MenuBar'
import { StoryIndex } from './pages/StoryIndex'
// import { AppFooter } from './cmps/AppFooter'


export function App() {

    return (
        <section className='main-grid-container'>

            <MenuBar className='grid-aside' />
          
            <StoryIndex className='grid-main' />
            {/* <AppFooter className='grid-main'/> */}
        </section>
    )
}


