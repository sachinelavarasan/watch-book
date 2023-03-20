import * as React from 'react';
import classNames from 'classnames';
import { DropdownOptionContainer } from './elements';

export interface DropdownOptionProps {
  label?: string;
  isDisabled?: boolean | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: object;
  isDelete?: boolean;
  labelStyle?: any;
  className?: any;
  startIcon?: React.ReactNode | string;
  endIcon?: React.ReactNode | string;
}

const DropdownOption = ({
  label,
  isDisabled,
  onClick,
  style,
  isDelete,
  labelStyle,
  className,
  startIcon,
  endIcon,
}: DropdownOptionProps) => {
  return (
    <DropdownOptionContainer
      onClick={onClick}
      style={{ ...style, width: '100%' }}
      startIcon={startIcon}
      endIcon={endIcon}
      className={classNames(className, {
        'is-delete': isDelete,
        'is-disabled': isDisabled,
      })}>
      <span style={{ ...labelStyle, textTransform: 'Capitalize' }} className="label">
        {label}
      </span>
    </DropdownOptionContainer>
  );
};

export default DropdownOption;
