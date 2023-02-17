import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoadingButton from '@mui/lab/LoadingButton';
import { Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import { loginSchema } from '../../../utils/validation';
import { TextInput } from '../../../common/TextInput';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { logIn, setError } from '../../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useAppSelector((state) => state.auth);
  console.log(!!error);
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
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col p-5 rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.3)]">
        <h2 className="m-0 pb-3 self-center">Login</h2>
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
          <LoadingButton
            loading={isLoading}
            variant="contained"
            onClick={handleSubmit(onSubmit)}
            disabled={!isValid}>
            <p className="m-0 capitalize font-semibold">Login</p>
          </LoadingButton>
        </div>
        <Snackbar open={!!error} autoHideDuration={3000} onClose={() => dispatch(setError(null))}>
          <Alert onClose={() => dispatch(setError(null))} severity="error" sx={{ width: '100%' }}>
            {error}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};
