/* eslint-disable react/prop-types */
import { forwardRef, useState } from 'react';
import { IconButton, InputAdornment, OutlinedInput, OutlinedInputProps } from '@mui/material';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

interface InputProps {
  id: string;
  label: string;
  error: boolean;
  errorMessage: string | undefined;
  isPassword?: boolean;
}

type InputFieldProps = InputProps & OutlinedInputProps;
type InputRef = HTMLInputElement;

export const TextInput = forwardRef<InputRef, InputFieldProps>(
  ({ id, label, error, isPassword = false, errorMessage, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
      <div className="flex flex-col relative">
        <label
          htmlFor="outlined-adornment-password"
          className="self-start mb-1 font-semibold text-sm ">
          {label}
        </label>

        <OutlinedInput
          ref={ref}
          {...props}
          id={id}
          fullWidth
          type={!showPassword && isPassword ? 'password' : 'text'}
          error={error}
          inputProps={{
            style: { padding: '10px', fontSize: '12px', backgroundColor: 'transparent' },
          }}
          endAdornment={
            isPassword ? (
              <InputAdornment position="end">
                <IconButton
                  size="small"
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end">
                  {!showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </IconButton>
              </InputAdornment>
            ) : null
          }
        />

        {error ? (
          <p className="m-0 text-red-700 text-[10px] absolute -bottom-3 ">{errorMessage}</p>
        ) : null}
      </div>
    );
  },
);

TextInput.displayName = 'TextInput';
