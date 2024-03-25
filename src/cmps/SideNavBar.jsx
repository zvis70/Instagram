import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { SvgComponent } from './SvgComponent';
import { NotificationsIcon } from './NotificationsIcon';
import { CreateStory } from '../pages/CreateStory';

export const SideNavBar = () => {
  const [isCreateStoryModalOpen, setIsCreateStoryModalOpen] = useState(false);





  function onToggleCreateStoryModal() {

    setIsCreateStoryModalOpen(prev => !prev)

  }

  return (

    <nav className="sidenavbar-container">
      {/* <aside className="grid-aside-areas"> */}

      {/* LOGO */}
      <div className='sidenavbar-grid-upper-logo'>
        <NavLink to="/"> <div className='instagram-logo-container'><SvgComponent svgName={'instagram_logo'} /></div> </NavLink>
        {/* <NavLink to="/"> <SvgComponent svgName={'instagram'} />  </NavLink> */}

      </div>


      {/* Navigation Links */}
      <div className="navigation-link sidenavbar-grid-navigation-links">
        <NavLink to="/"> <div className='svg-icon-div-position flex'> <SvgComponent svgName={'homeblack'} className='svg-icon-position' /> <span className='sidenavbar-links-names-position'>Home</span> </div> </NavLink>
        {/* <NavLink to="/" activeClassName="active"> <div className='svg-icon-div-position flex'> <SvgComponent svgName={isActive => isActive ? 'homeblack' : 'home'} className='svg-icon-position' /> <span className='sidenavbar-links-names-position'>Home</span> </div> </NavLink> */}
        {/* <NavLink to="/search" className="active">  */}
        {/* <div className='svg-icon-div-position flex'>  */}
        {/* Conditional rendering for search icon */}
        {/* <SvgComponent svgName={'home'} className='svg-icon-position' isActive={false} />  */}
        {/* <SvgComponent svgName={'homeblack'} className='svg-icon-position' isActive={true} />  */}
        {/* <span className='sidenavbar-links-names-position'>Search</span>  */}
        {/* </div>  */}
        {/* </NavLink>  */}
        <NavLink to="/search"> <div className='svg-icon-div-position flex'> <SvgComponent svgName={'search'} className='svg-icon-position' /> <span className='sidenavbar-links-names-position'>Search</span> </div> </NavLink>
        <NavLink to="/explore"> <div className='svg-icon-div-position flex'> <SvgComponent svgName={'explore'} className='svg-icon-position' /> <span className='sidenavbar-links-names-position'>Explore</span> </div> </NavLink>
        <NavLink to="/reels"> <div className='svg-icon-div-position flex'> <SvgComponent svgName={'reels'} className='svg-icon-position' /> <span className='sidenavbar-links-names-position'>Reels</span> </div> </NavLink>
        <NavLink to="/messages"> <div className='svg-icon-div-position flex'> <SvgComponent svgName={'massages'} className='svg-icon-position' /> <span className='sidenavbar-links-names-position'>Massages</span> </div> </NavLink>
        {/* <NavLink to="/notifications"><NotificationsIcon /> <span className='sidenavbar-links-names-position'>Notifications</span></NavLink> */}
        <NavLink to="/notifications" ><div className='svg-icon-div-position flex'> <SvgComponent svgName={'notifications'} className='svg-icon-position' /> <span className='sidenavbar-links-names-position'>Notifications</span></div> </NavLink>
        {/* {isCreateModalOpen && <CreateStory />} onClick={onToggleCreateModal} */}
        <NavLink to="#" onClick={onToggleCreateStoryModal}> <div className='svg-icon-div-position flex'> <SvgComponent svgName={'create'} className='svg-icon-position' /> <span className='sidenavbar-links-names-position'>Create</span> </div> </NavLink>
        {isCreateStoryModalOpen && <CreateStory  setIsCreateStoryModalOpen={setIsCreateStoryModalOpen}/>}
        <NavLink to="/create"> <div className='svg-icon-div-position flex'> <SvgComponent svgName={'avatar'} className='svg-icon-position' /> <span className='sidenavbar-links-names-position'>Profile</span> </div> </NavLink>
        {/* <NavLink to="/profile"><span className='sidenavbar-links-names-position'>Profile</span></NavLink> */}
        
      </div>

      {/* Additional Options/ settings---- navigation-link */}
      <div className="sidenavbar-grid-bottom-settings-link">
        <NavLink to="/settings"> <div className='svg-icon-div-position flex'> <SvgComponent svgName={'more'} className='svg-icon-position' /> <span className='sidenavbar-links-names-position'>More</span> </div> </NavLink>
      </div>
      {/* </aside> */}

    </nav>
  );
};




// export default SideNavBar;

