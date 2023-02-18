import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoadingButton from '@mui/lab/LoadingButton';

import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { register, setError } from '../../../redux/slices/authSlice';
import { signUpSchema } from '../../../utils/validation';
import { TextInput } from '../../../common/TextInput';
import { Link, Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useAppSelector((state) => state.auth);
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      orgName: '',
      name: '',
      orgAddress: '',
      email: '',
      password: '',
      cpassword: '',
    },
  });
  const onSubmit = (e: any) => {
    if (isValid) {
      dispatch(
        register(e, () => {
          navigate('/');
        }),
      );
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col p-5 rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.3)]">
        <h2 className="m-0 pb-3 self-center">Register</h2>
        <div>
          <Controller
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                label="Organisation"
                id="outlined-adornment-fullname"
                errorMessage={errors.orgName?.message}
                error={!!errors.orgName}
                placeholder="Your organisation name"
              />
            )}
            name="orgName"
          />
        </div>

        <div className="flex flex-row mt-4 justify-between">
          <div className="w-full">
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  label="Name"
                  id="outlined-adornment-fullname"
                  errorMessage={errors.name?.message}
                  error={!!errors.name}
                  placeholder="Your name"
                />
              )}
              name="name"
            />
          </div>
          <div className="ml-4 w-full">
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  label="Address"
                  id="outlined-adornment-orgAddress"
                  errorMessage={errors.orgAddress?.message}
                  error={!!errors.orgAddress}
                  placeholder="Address"
                />
              )}
              name="orgAddress"
            />
          </div>
        </div>
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
        <div className="flex flex-row mt-4">
          <div>
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  label="Password"
                  id="outlined-adornment-password"
                  errorMessage={errors.password?.message}
                  error={!!errors.password}
                  placeholder="Password"
                  isPassword
                />
              )}
              name="password"
            />
          </div>
          <div className="ml-4">
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  label="Confirm password"
                  id="outlined-adornment-cpassword"
                  errorMessage={errors.cpassword?.message}
                  error={!!errors.cpassword}
                  placeholder="Confirm password"
                  isPassword
                />
              )}
              name="cpassword"
            />
          </div>
        </div>
        <div className="mt-5 flex justify-center">
          <LoadingButton loading={isLoading} variant="contained" onClick={handleSubmit(onSubmit)}>
            <p className="m-0 capitalize font-semibold">Register</p>
          </LoadingButton>
        </div>
        <div className="mt-3 flex justify-center font-semibold text-sm">
          <Link href="/" underline="hover" className="hover:bg-slate-200 p-1 rounded">
            Login
          </Link>
        </div>
      </div>
      <Snackbar open={!!error} autoHideDuration={3000} onClose={() => dispatch(setError(null))}>
        <Alert onClose={() => dispatch(setError(null))} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
};
