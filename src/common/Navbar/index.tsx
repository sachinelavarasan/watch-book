import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { NavLink } from 'react-router-dom';

import { TbLayoutDashboard } from 'react-icons/tb';
import { TbListDetails } from 'react-icons/tb';
import { HiOutlineUserGroup } from 'react-icons/hi2';
import { BsFileEarmarkSpreadsheet } from 'react-icons/bs';
import { SlCalender } from 'react-icons/sl';

import { NavbarContainer } from './elements';
import Icon from './components/Icon';

function Navbar() {
  return (
    <NavbarContainer>
      <List>
        <ListItem className="logo-container">
          <NavLink to="/admin" className="logo-link">
            <div className="watch-book">
              <span className="watch">W</span>
              <span className="book">B</span>
            </div>
          </NavLink>
        </ListItem>
        <ListItem className="icon">
          <Icon route="/admin" iconComponent={<TbLayoutDashboard />} toolTipTitle="Dashboard" />
        </ListItem>
        <ListItem className="icon">
          <Icon route="/admin/details" iconComponent={<TbListDetails />} toolTipTitle="Details" />
        </ListItem>
        <ListItem className="icon">
          <Icon
            route="/admin/employees"
            iconComponent={<HiOutlineUserGroup />}
            toolTipTitle="Employees"
          />
        </ListItem>
        <ListItem className="icon">
          <Icon
            route="/admin/timelogs"
            iconComponent={<BsFileEarmarkSpreadsheet />}
            toolTipTitle="Time log"
          />
        </ListItem>{' '}
        <ListItem className="icon">
          <Icon route="/admin/leave" iconComponent={<SlCalender />} toolTipTitle="Leave" />
        </ListItem>
      </List>
    </NavbarContainer>
  );
}

export default Navbar;
