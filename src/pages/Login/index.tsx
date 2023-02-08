import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IconButton, InputAdornment, TextField, OutlinedInput } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { loginSchema } from '../../utils/validation';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const {
    // register,
    handleSubmit,
    // watch,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = (e: any) => {
    console.log(e);
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col p-5 rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.3)]">
        <h2 className="m-0 pb-3 self-center">Login</h2>
        <div className="flex flex-col relative">
          <label
            htmlFor="outlined-adornment-email"
            className="self-start mb-1 font-semibold text-sm">
            Email
          </label>
          <Controller
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.email}
                id="outlined-adornment-email"
                inputProps={{
                  style: { padding: '10px', fontSize: '12px' },
                }}
                placeholder="Email Address"
              />
            )}
            name="email"
          />
          {errors.email ? (
            <p className="m-0 text-red-700 text-[10px] absolute -bottom-3">
              {errors.email?.message}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col relative mt-4">
          <label
            htmlFor="outlined-adornment-password"
            className="self-start mb-1 font-semibold text-sm ">
            Password
          </label>
          <Controller
            control={control}
            render={({ field }) => (
              <OutlinedInput
                {...field}
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                error={!!errors.password}
                inputProps={{
                  style: { padding: '10px', fontSize: '12px' },
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end">
                      {!showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="Password"
              />
            )}
            name="password"
          />
          {errors.password ? (
            <p className="m-0 text-red-700 text-[10px] absolute -bottom-3 ">
              {errors.password?.message}
            </p>
          ) : null}
        </div>
        <div className="mt-5 flex justify-center">
          <LoadingButton loading={false} variant="contained" onClick={handleSubmit(onSubmit)}>
            <p className="m-0 capitalize font-semibold">Login</p>
          </LoadingButton>
        </div>
      </div>
    </div>
  );
}

export default Login;
