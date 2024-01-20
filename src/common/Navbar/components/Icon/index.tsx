import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import { IconContext } from 'react-icons';
import { IconContainer } from './elements';

export const Icon = ({ route, activeIcon, inActiveIcon, toolTipTitle }: any) => {
  let resolved = useResolvedPath(route);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <IconContainer>
      <NavLink to={route} end className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
        <Tooltip title={toolTipTitle} arrow placement="right" enterDelay={500}>
          <div className="icon-container">
            <IconContext.Provider
              value={{
                size: '1.7rem',
                className: 'activeState',
              }}>
              {match ? activeIcon : inActiveIcon}
            </IconContext.Provider>
          </div>
        </Tooltip>
      </NavLink>
    </IconContainer>
  );
};
