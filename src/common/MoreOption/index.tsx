import * as React from 'react';
import classNames from 'classnames';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import { BsThreeDots } from 'react-icons/bs';

import { MenuContainer, DropdownContainer } from './elements';
import { useTheme } from '@emotion/react';

const ITEM_HEIGHT = 48;

const MoreOption = ({ children }: any) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const theme: any = useTheme();
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MenuContainer>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        className={classNames('icon-button', {
          'is-open': open,
        })}
        onClick={handleClick}>
        <BsThreeDots />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            minWidth: '7rem',
            backgroundColor: theme.custom.backgroundColor,
            marginTop: '0.4rem',
          },
        }}>
        <DropdownContainer>{children}</DropdownContainer>
      </Menu>
    </MenuContainer>
  );
};

export default MoreOption;
