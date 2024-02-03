/* eslint-disable no-unused-vars */
import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import styled from '@emotion/styled';
import { SelectInputProps } from '@mui/material/Select/SelectInput';
import { useTheme } from '@emotion/react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme: any) => ({
  select: {
    width: '100%',
    '& .MuiSelect-iconOutlined': {
      // Adjust the styles for the dropdown icon as needed
      marginRight: theme.spacing(1),
    },
    '& .MuiSelect-selectMenu': {
      // Adjust the styles for the select menu as needed
      overflowY: 'auto', // Ensure vertical scrollbar is visible
      minHeight: '50px',
    },
  },
}));

const SelectContainer = styled.div`
  fieldset {
    border-color: ${({ theme }: any) => theme.selectInputStyle.borderColor} !important;
    border-width: 0.0625rem !important;
    border-radius: 0.25rem;
  }
  .MuiOutlinedInput-input {
    padding: 0.375rem 1rem;
    border-radius: 0.25rem;
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
  options: { label: string; value: string }[];
  placeholder: string;
  flexType?: string;
  isLabel?: boolean;
}

type selectFieldProps = SelectProps & SelectInputProps;
type SelectRef = HTMLSelectElement;

export const SelectField = React.forwardRef<SelectRef, selectFieldProps>(
  ({ id, label, error, errorMessage, options, placeholder, flexType, isLabel, ...props }, ref) => {
    const theme: any = useTheme();
    const { classes } = useStyles();

    return (
      <SelectContainer>
        <Box
          sx={{
            minWidth: '14rem',
            display: 'flex',
            flexDirection: flexType ? flexType : 'column',
            position: 'relative',
            alignItems: 'center',
            borderRadius: '0.25rem',
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
            inputProps={{
              sx: {
                color: theme.selectInputStyle.inputStyle.color,
                backgroundColor: theme.selectInputStyle.backgroundColor,
              },
              MenuProps: {
                PaperProps: {
                  sx: {
                    backgroundColor: theme.selectInputStyle.backgroundColor,
                    top: '9.5rem !important',
                  },
                },
                MenuListProps: {
                  sx: {
                    color: theme.selectInputStyle.list.color,
                  },
                },
              },
            }}
            className={classes.select}
            displayEmpty
            renderValue={(value: any) =>
              value != undefined ? value.label : <span>{placeholder}</span>
            }>
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
