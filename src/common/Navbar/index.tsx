import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { NavLink } from 'react-router-dom';

import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { HiOutlineUserGroup } from 'react-icons/hi2';
import { RiTimeLine } from 'react-icons/ri';
import { FaRegCalendarAlt } from 'react-icons/fa';

import { MdSpaceDashboard } from 'react-icons/md';
import { MdOutlineWork } from 'react-icons/md';
import { HiUserGroup } from 'react-icons/hi2';
import { RiTimeFill } from 'react-icons/ri';
import { FaCalendar } from 'react-icons/fa';

import WatchBookLogo from '../../assets/images/watchbook-logo-light.png';

import { NavbarContainer } from './elements';
import { Icon, ProfileDropdown } from './components';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { authSelector, setTheme } from '../../redux/slices/authSlice';

function Navbar() {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(authSelector);
  return (
    <NavbarContainer>
      <List>
        <ListItem className="logo-container watch-book-logo">
          <NavLink to="/admin" className="logo-link">
            <div className="watch-book">
              <img src={WatchBookLogo} alt="WB" className="logo" />
            </div>
          </NavLink>
        </ListItem>
        <ListItem className="icon">
          <Icon
            route="/admin"
            activeIcon={<MdSpaceDashboard />}
            inActiveIcon={<MdOutlineSpaceDashboard />}
            toolTipTitle="Dashboard"
          />
        </ListItem>
        <ListItem className="icon">
          <Icon
            route="/admin/projects"
            activeIcon={<MdOutlineWork />}
            inActiveIcon={<MdOutlineWorkOutline />}
            toolTipTitle="Projects"
          />
        </ListItem>
        <ListItem className="icon">
          <Icon
            route="/admin/employees"
            activeIcon={<HiUserGroup />}
            inActiveIcon={<HiOutlineUserGroup />}
            toolTipTitle="Employees"
          />
        </ListItem>
        <ListItem className="icon">
          <Icon
            route="/admin/timelogs"
            activeIcon={<RiTimeFill />}
            inActiveIcon={<RiTimeLine />}
            toolTipTitle="Time log"
          />
        </ListItem>{' '}
        <ListItem className="icon">
          <Icon
            route="/admin/leave"
            activeIcon={<FaCalendar />}
            inActiveIcon={<FaRegCalendarAlt />}
            toolTipTitle="Leave"
          />
        </ListItem>
      </List>
      <button
        type="button"
        onClick={() => {
          // const theme = localStorage.getItem('theme');
          // localStorage.setItem('theme', theme == 'dark' ? 'light' : 'dark');
          dispatch(setTheme(theme == 'dark' ? 'light' : 'dark'));
        }}>
        switch
      </button>
      <ProfileDropdown />
    </NavbarContainer>
  );
}

export default Navbar;
