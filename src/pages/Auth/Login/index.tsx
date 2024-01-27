import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTheme } from '@emotion/react';
// import LoadingButton from '@mui/lab/LoadingButton';
import { Link, Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import { loginSchema } from '../../../utils/validation';
import { TextInput } from '../../../common/TextInput';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { logIn, setError } from '../../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import Button from '../../../common/Button';

import { LoginContainer } from './elements';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Login = () => {
  const theme: any = useTheme();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useAppSelector((state) => state.auth);
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (e: any) => {
    if (isValid) {
      dispatch(
        logIn(e, () => {
          navigate('/admin');
        }),
      );
    }
  };

  return (
    <LoginContainer
      className="flex items-center justify-center h-screen w-full"
      style={theme.appMainContainer}>
      <div
        className="login-form-container flex flex-col p-5 rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.3)]"
        style={theme.authFormBg}>
        <div className="title m-0 pb-3 self-center" style={theme.conponentTilte}>
          Login
        </div>
        <div>
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
        <div className="mt-5 flex justify-center">
          {/* <LoadingButton
            loading={isLoading}
            variant="contained"
            onClick={handleSubmit(onSubmit)}
            disabled={!isValid}>
            <p className="m-0 capitalize font-semibold">Login</p>
          </LoadingButton> */}
          <Button
            isLoading={isLoading}
            variant="contained"
            onClick={handleSubmit(onSubmit)}
            isDisabled={!isValid}
            label="Login"
            labelStyle={{ color: 'white' }}
          />
        </div>
        <div className="mt-3 flex justify-center font-semibold text-sm">
          <Link
            href="/signup"
            underline="hover"
            className="hover:bg-slate-200 p-1 rounded"
            sx={theme.authLinkStyle}>
            Register
          </Link>
        </div>
        <Snackbar open={!!error} autoHideDuration={3000} onClose={() => dispatch(setError(null))}>
          <Alert onClose={() => dispatch(setError(null))} severity="error" sx={{ width: '100%' }}>
            {error}
          </Alert>
        </Snackbar>
      </div>
    </LoginContainer>
  );
};
