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
    border-width: 2px !important;
  }
  .MuiOutlinedInput-input {
    padding: 10px 20px;
  }
  .select {
    border-radius: 6px;
  }
  .error {
    border-color: red !important;
    border-width: 2px !important;
  }
`;

interface SelectProps {
  id: string;
  label: string;
  error?: boolean;
  errorMessage?: string | undefined;
  options: any;
  placeholder: string;
}

type selectFieldProps = SelectProps & SelectInputProps;
type SelectRef = HTMLSelectElement;

export const SelectField = React.forwardRef<SelectRef, selectFieldProps>(
  ({ id, label, error, errorMessage, options, placeholder, ...props }, ref) => {
    return (
      <SelectContainer>
        <Box sx={{ minWidth: 120, display: 'flex', flexDirection: 'column', position: 'relative' }}>
          <label
            htmlFor="outlined-adornment-password"
            className="self-start mb-1 font-semibold text-sm ">
            {label}
          </label>
          {/* <FormControl sx={{ minWidth: 120 }} error={error}> */}
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
          {/* </FormControl> */}
          {error ? (
            <p className="m-0 text-red-700 text-[10px] absolute -bottom-3 ">{errorMessage}</p>
          ) : null}
        </Box>
      </SelectContainer>
    );
  },
);

SelectField.displayName = 'SelectField';
