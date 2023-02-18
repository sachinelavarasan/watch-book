import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import { IoLogOutOutline } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { logout } from '../../../../redux/slices/authSlice';
import { useAppDispatch, useAppSelector } from '../../../../redux/store';
import { useNavigate } from 'react-router-dom';

export const ProfileDropdown = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logOut = () => {
    handleClose();
    dispatch(
      logout(() => {
        navigate('/');
      }),
    );
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'start', textAlign: 'center' }}>
        {/* <Typography>Contact</Typography>
        <Typography>Profile</Typography> */}
        <IconButton
          onClick={handleClick}
          size="small"
          // sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}>
          <Avatar className="avatar-icon">B</Avatar>
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        style={{ top: '-62px' }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',

            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:after': {
              content: '""',
              display: 'block',
              position: 'absolute',
              left: 10,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}>
        <MenuItem onClick={handleClose} className="font-bold">
          {user?.oga_name}
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <CgProfile size="1.4rem" color="#272727" />
          </ListItemIcon>
          Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={logOut}>
          <ListItemIcon>
            <IoLogOutOutline size="1.4rem" color="#272727" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};
