import { Home } from './pages/Home.jsx'
import { Search } from './pages/Search.jsx'
import { Explore } from './pages/Explore.jsx'
import { Reels } from './pages/Reels.jsx'
import { Massages } from './pages/Massages.jsx'
import { Notifications } from './cmps/Notifications.jsx'
import { CreateStory } from './pages/CreateStory.jsx'
import { Profile } from './pages/Profile.jsx'



// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <Home />,
        label: 'Home',
    },
    {
        path: 'search',
        component: <Search />,
        label: 'Search'
    },
    {
        path: 'explore',
        component: <Explore />,
        label: 'Explore'
    },
    {
        path: 'reels',
        component: <Reels />,
        label: 'Reels'
    },
    {
        path: 'massages',
        component: <Massages />,
        label: 'Massages'
    },
    {
        path: 'notifications',
        component: <Notifications />,
        label: 'Notifications'
    },
    {
        path: 'create',
        component: <CreateStory />,
        label: 'Create'
    },
    {
        path: 'profile',
        component: <Profile />,
        label: 'Profile'
    }
]

export default routes