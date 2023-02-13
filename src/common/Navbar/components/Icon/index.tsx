import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { IconContext } from 'react-icons';
import { NavLink } from 'react-router-dom';
import { IconContainer } from './elements';

function Icon({ route, iconComponent, toolTipTitle }: any) {
  return (
    <IconContainer>
      <NavLink to={route} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
        <Tooltip title={toolTipTitle} arrow placement="right">
          <div className="icon-container">
            <IconContext.Provider
              value={{
                size: '1.5rem',
                className: 'activeState',
              }}>
              {iconComponent}
            </IconContext.Provider>
          </div>
        </Tooltip>
      </NavLink>
    </IconContainer>
  );
}

export default Icon;
