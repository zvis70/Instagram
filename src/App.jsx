import React from 'react'
import { Route, Routes } from 'react-router-dom';
// import { MenuBar } from './cmps/MenuBar'
import { Massages } from './pages/Massages';
import { StoryIndex } from './pages/StoryIndex'
// import { Explore } from '@mui/icons-material';
import { Explore } from './pages/Explore';
import { StoryDetails } from './pages/StoryDetails';
import { Reels } from './pages/Reels';
import { AddStory } from './pages/AddStory';
import { Profile } from './pages/Profile';
import { SideNavBar } from './cmps/SideNavBar';
import { AppFooter } from './cmps/AppFooter';

export function App() {

    return (
        <section className='main-app main-grid-container'>
            {/* <MenuBar className='grid-aside-areas' /> */}
            <SideNavBar className='grid-aside-areas' />
            <Routes className='grid-main-area'>
                <Route path="/" element={<StoryIndex />} />
                <Route path="/story/:storyid/" element={<StoryDetails />} />
                <Route path="/search/" /> {/* POPUP ??????????? */}
                <Route path="/explore/" element={<Explore />} />
                <Route path="/reels/" element={<Reels />} />
                <Route path="/direct/inbox/" element={<Massages />} />

                {/* <Route path="/notifications/" /> POPUP ???????????*/}
                <Route path="/" element={<AddStory />} /> {/* MODAL ??????*/}
                <Route path="/:username/" element={<Profile />} />
            </Routes>
            {/* <AppFooter /> */}
        </section>

    )
}


