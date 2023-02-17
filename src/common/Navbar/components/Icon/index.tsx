import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { IconContext } from 'react-icons';
import { NavLink } from 'react-router-dom';
import { IconContainer } from './elements';

export const Icon = ({ route, iconComponent, toolTipTitle }: any) => {
  return (
    <IconContainer>
      <NavLink to={route} end className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
        <Tooltip title={toolTipTitle} arrow placement="right" enterDelay={500}>
          <div className="icon-container">
            <IconContext.Provider
              value={{
                size: '1.3rem',
                className: 'activeState',
              }}>
              {iconComponent}
            </IconContext.Provider>
          </div>
        </Tooltip>
      </NavLink>
    </IconContainer>
  );
};
