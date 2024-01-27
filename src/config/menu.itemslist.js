//import React from 'react'
import {
    Photo, StarOutline, SendOutlined, InsertDriveFileOutlined, DeleteOutlined,
    MailOutlined, Instagram, Home, Search, Explore, Note, Create, AccountBox,Menu} from "@mui/icons-material"

    import { SvgComponent } from "../cmps/SvgComponent";


export const MENU_ITEMS_LIST = [
    {
        name: 'home',
        title: 'Home',
        icon: Home
    },
    {
        name: 'search',
        title: 'Search',
        icon: Search
    },
    {
        name: 'explore',
        title: 'Explore',
        icon: Explore
    },
    {
        name: 'reels',
        title: 'Reels',
        icon: InsertDriveFileOutlined

    },
    {
        name: 'massages',
        title: 'Massages',
        icon: MailOutlined
    },
    {
        name: 'notifications',
        title: 'Notifications',
        icon: MailOutlined
    },
    {
        name: 'create',
        title: 'Create',
        icon: Create
    },
    {
        name: 'profile',
        title: 'Profile',
        icon: AccountBox
    },
    {
        name: 'more',
        title: 'More',
        icon: Menu
    }
];
