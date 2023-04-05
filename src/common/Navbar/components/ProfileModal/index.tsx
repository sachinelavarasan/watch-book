import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { ProfileModalContainer, ProfileModalFooterContainer } from './elements/index';
import Divider from '@mui/material/Divider';
import { Avatar } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
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
import { editProfileSchema } from '../../../../utils/validation';
import { editProfile } from '../../../../redux/slices/authSlice';
import { useAppDispatch } from '../../../../redux/store';
import Button from '../../../Button';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ProfileModal = ({ open, modalClose, data, isLoading }: any) => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const {
    control,
    setValue,
    reset,
    getValues,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(editProfileSchema),
    defaultValues: {
      orgName: '',
      name: '',
      orgAddress: '',
      email: '',
      phone: '',
      userId: '',
      orgId: '',
    },
  });

  React.useEffect(() => {
    if (data) {
      setValue('email', data?.us_email);
      setValue('name', data?.us_name);
      setValue('orgName', data?.org_name);
      setValue('orgAddress', data?.org_address);
      setValue('phone', data?.org_phone_no);
      setValue('orgId', data?.org_id);
      setValue('userId', data?.us_id);
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

  const onSubmit = (e: object) => {
    if (isValid) {
      dispatch(
        editProfile(e, () => {
          modalClose();
        }),
      );
    }
  };
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
            {/* <Button onClick={modalClose} variant="outlined">
              Close
            // </Button> */}
            <Button
              label="Close"
              size="small"
              variant="outlined"
              onClick={modalClose}
              style={{ color: '#9000B9', borderColor: '#9000B9' }}
            />
            <LoadingButton
              onClick={handleSubmit(onSubmit)}
              variant="contained"
              disabled={!isDirty}
              loading={isLoading}
              size="small"
              sx={{ backgroundColor: '#9000db', color: 'white' }}>
              Update
            </LoadingButton>
            {/* <Button
              style={{ backgroundColor: '#9000B9' }}
              labelStyle={{ color: 'white' }}
              label="Update"
              size="small"
              isDisabled={!isDirty}
              variant="contained"
              isLoading={isLoading}
              onClick={handleSubmit(onSubmit)}
            /> */}
          </DialogActions>
        </ProfileModalFooterContainer>
      </Dialog>
    </>
  );
};
