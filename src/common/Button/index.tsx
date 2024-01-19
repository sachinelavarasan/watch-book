import * as React from 'react';

import LoadingButton from '@mui/lab/LoadingButton';

interface ButtonProps {
  label?: string;
  variant?: 'text' | 'outlined' | 'contained' | undefined;
  isDisabled?: boolean | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: 'small' | 'medium' | 'large' | undefined;
  startIcon?: React.ReactNode | string;
  endIcon?: React.ReactNode | string;
  loadingPosition?: 'start' | 'end';
  loadingIndicator?: string;
  style?: object;
  isLoading?: boolean;
  labelStyle?: any;
}

const Button = ({
  label,
  variant,
  isDisabled,
  onClick,
  size,
  startIcon,
  endIcon,
  loadingPosition,
  loadingIndicator,
  style,
  isLoading,
  labelStyle,
}: ButtonProps) => {
  return (
    <LoadingButton
      loading={isLoading}
      loadingPosition={loadingPosition}
      loadingIndicator={loadingIndicator}
      variant={variant}
      disabled={isDisabled}
      onClick={onClick}
      size={size}
      startIcon={startIcon}
      style={style}
      endIcon={endIcon}>
      <span style={{ ...labelStyle, textTransform: 'Capitalize' }}>{label}</span>
    </LoadingButton>
  );
};

export default Button;
