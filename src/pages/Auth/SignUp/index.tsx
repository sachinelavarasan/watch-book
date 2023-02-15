import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoadingButton from '@mui/lab/LoadingButton';

import { signUpSchema } from '../../../utils/validation';
import { TextInput } from '../../../common/TextInput';

export const SignUp = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      organisation: '',
      fullname: '',
      email: '',
      password: '',
      cpassword: '',
    },
  });
  const onSubmit = (e: any) => {
    console.log(e);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col p-5 rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.3)]">
        <h2 className="m-0 pb-3 self-center">SignUp</h2>
        <div>
          <Controller
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                label="Organisation"
                id="outlined-adornment-fullname"
                errorMessage={errors.organisation?.message}
                error={!!errors.organisation}
                placeholder="Your organisation name"
              />
            )}
            name="organisation"
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
                errorMessage={errors.fullname?.message}
                error={!!errors.fullname}
                placeholder="Your name"
              />
            )}
            name="fullname"
          />
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
        <div className="mt-4">
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
        <div className="mt-5 flex justify-center">
          <LoadingButton
            loading={false}
            variant="contained"
            onClick={handleSubmit(onSubmit)}
            disabled={!isValid}>
            <p className="m-0 capitalize font-semibold">Register</p>
          </LoadingButton>
        </div>
      </div>
    </div>
  );
};
