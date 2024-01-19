/* eslint-disable no-unused-vars */
import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import styled from '@emotion/styled';
import { SelectInputProps } from '@mui/material/Select/SelectInput';

const SelectContainer = styled.div`
  fieldset {
    border-color: #8a8686 !important;
    border-width: 0.0625rem !important;
  }
  .MuiOutlinedInput-input {
    padding: 0.375rem 1rem;
  }
  .select {
    border-radius: 0.25rem;
    width: 100%;
  }
  .error {
    border-color: red !important;
    border-width: 0.0625rem !important;
  }
`;

interface SelectProps {
  id: string;
  label: string;
  error?: boolean;
  errorMessage?: string | undefined;
  options: any;
  placeholder: string;
  flexType?: string;
  isLabel?: boolean;
}

type selectFieldProps = SelectProps & SelectInputProps;
type SelectRef = HTMLSelectElement;

export const SelectField = React.forwardRef<SelectRef, selectFieldProps>(
  ({ id, label, error, errorMessage, options, placeholder, flexType, isLabel, ...props }, ref) => {
    return (
      <SelectContainer>
        <Box
          sx={{
            minWidth: '14rem',
            display: 'flex',
            flexDirection: flexType ? flexType : 'column',
            position: 'relative',
            alignItems: 'center',
          }}>
          {isLabel ? (
            <label htmlFor="outlined-adornment-password" className="mb-1 font-semibold text-sm ">
              {label}
            </label>
          ) : null}
          <Select
            labelId="demo-simple-select-label"
            ref={ref}
            {...props}
            autoWidth={false}
            multiple={false}
            native={false}
            id={id}
            className="select">
            <MenuItem disabled value="">
              {placeholder}
            </MenuItem>
            {options.map((opt: any) => {
              return (
                <MenuItem value={opt.value} key={opt.value}>
                  {opt.label}
                </MenuItem>
              );
            })}
          </Select>
          {error ? (
            <p className="m-0 text-red-700 text-[10px] absolute -bottom-3 ">{errorMessage}</p>
          ) : null}
        </Box>
      </SelectContainer>
    );
  },
);

SelectField.displayName = 'SelectField';
