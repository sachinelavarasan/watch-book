import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { ProfileModalContainer, ProfileModalFooterContainer } from './elements/index';
import Divider from '@mui/material/Divider';
import { Avatar } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ProfileModal = ({ open, modalClose, data }: any) => {
  console.log('haiii', open, data);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      <Dialog
        open={open}
        onClose={modalClose}
        TransitionComponent={Transition}
        className="dialog-container"
        fullScreen={fullScreen}
        fullWidth>
        <ProfileModalContainer>
          <div className="modal-container">
            <DialogTitle className="mb-3">
              <div className="profile-image-container">
                <Avatar alt="organization image" src="" sx={{ width: 70, height: 70 }} />
              </div>
            </DialogTitle>
            <Divider />
            <DialogContent className="dialog-content">
              <div>
                <h3>Logined User Details</h3>
                <div className="mt-5">
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    type="text"
                    fullWidth
                    label="User Name"
                    variant="outlined"
                    defaultValue={data?.oga_name}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
                <div className="mt-4">
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    type="email"
                    fullWidth
                    label="User Email"
                    variant="outlined"
                    defaultValue={data?.oga_email}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
              </div>
              <div className="mt-5">
                <h3>Organization Details</h3>
                <div className="mt-5">
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    type="text"
                    fullWidth
                    label="Organaisation Name"
                    variant="outlined"
                    defaultValue={data?.organisation?.org_name}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
                <div className="mt-4">
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    type="email"
                    fullWidth
                    label="Organaisation Email"
                    variant="outlined"
                    defaultValue="firstorg@org.com"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
                <div className="mt-4">
                  <TextField
                    margin="dense"
                    id="outlined-multiline-static"
                    label="Phone Number "
                    // type="number"
                    type="text"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                      inputMode: 'numeric',
                      // pattern: '[0-9]*',
                    }}
                    defaultValue="0241 498409"
                  />
                </div>
                <div className="mt-4">
                  <TextField
                    margin="dense"
                    id="outlined-multiline-static"
                    label="Organisation Address"
                    multiline
                    fullWidth
                    rows={3}
                    defaultValue={`No 7/10 , Sanfransico,  ${data?.organisation?.org_address}`}
                  />
                </div>
              </div>
            </DialogContent>
          </div>
        </ProfileModalContainer>
        <Divider />
        <ProfileModalFooterContainer>
          <DialogActions className="footer" sx={{ height: '80px' }}>
            <Button onClick={modalClose} variant="outlined">
              Close
            </Button>
            <Button
              onClick={modalClose}
              variant="contained"
              // disableds
              sx={{ backgroundColor: '#475be8', color: 'white' }}>
              Update
            </Button>
          </DialogActions>
        </ProfileModalFooterContainer>
      </Dialog>
    </>
  );
};
