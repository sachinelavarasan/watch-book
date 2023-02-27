import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { ProfileModalContainer, ProfileModalFooterContainer } from './elements/index';
import Divider from '@mui/material/Divider';
import { Avatar } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Controller, useForm } from 'react-hook-form';
import { TextInput } from '../../../TextInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from '../../../../utils/validation';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ProfileModal = ({ open, modalClose, data }: any) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const {
    control,
    setValue,
    reset,
    getValues,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      orgName: '',
      name: '',
      orgAddress: '',
      email: '',
      phone: '',
    },
  });

  React.useEffect(() => {
    if (data) {
      console.log('first');
      setValue('email', data?.oga_email);
      setValue('name', data?.oga_name);
      setValue('orgName', data?.organisation?.org_name);
      setValue('orgAddress', data?.organisation?.org_address);
      reset(
        {
          ...getValues(),
        },
        {
          keepDirty: false,
        },
      );
    }
  }, [data]);

  // const onSubmit = (e: any) => {
  //   if (isValid) {
  //     console.log(e);
  //   }
  // };
  console.log(isDirty, 'nkjnjkjk');
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
                <h3 className="m-0">User Details</h3>
                <div className="mt-4">
                  <Controller
                    control={control}
                    render={({ field }) => (
                      <TextInput
                        {...field}
                        label="Email"
                        id="outlined-adornment-email"
                        errorMessage={errors.email?.message}
                        error={!!errors.email}
                        placeholder="Email"
                      />
                    )}
                    name="email"
                  />
                </div>
                <div className="mt-4">
                  <Controller
                    control={control}
                    render={({ field }) => (
                      <TextInput
                        {...field}
                        label="Name"
                        id="outlined-adornment-fullname"
                        errorMessage={errors.name?.message}
                        error={!!errors.name}
                        placeholder="Name"
                      />
                    )}
                    name="name"
                  />
                </div>
              </div>
              <div className="mt-5">
                <h3 className="m-0">Organization Details</h3>
                <div className="mt-4">
                  <Controller
                    control={control}
                    render={({ field }) => (
                      <TextInput
                        {...field}
                        label="Organisation"
                        id="outlined-adornment-fullname"
                        errorMessage={errors.orgName?.message}
                        error={!!errors.orgName}
                        placeholder="Organisation name"
                      />
                    )}
                    name="orgName"
                  />
                </div>
                <div className="mt-4">
                  <Controller
                    control={control}
                    render={({ field }) => (
                      <TextInput
                        {...field}
                        label="Phone Number"
                        id="outlined-adornment-fullname"
                        errorMessage={errors.phone?.message}
                        error={!!errors.phone}
                        placeholder="Phone number"
                      />
                    )}
                    name="phone"
                  />
                </div>

                <div className="mt-4">
                  <Controller
                    control={control}
                    render={({ field }) => (
                      <TextInput
                        {...field}
                        label="Organisation Address"
                        id="outlined-adornment-fullname"
                        errorMessage={errors.orgAddress?.message}
                        error={!!errors.orgAddress}
                        placeholder="Organisation Address"
                        multiline
                        rows={3}
                        style={{ padding: '0px' }}
                      />
                    )}
                    name="orgAddress"
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
              disabled={!isDirty}
              sx={{ backgroundColor: '#475be8', color: 'white' }}>
              Update
            </Button>
          </DialogActions>
        </ProfileModalFooterContainer>
      </Dialog>
    </>
  );
};
