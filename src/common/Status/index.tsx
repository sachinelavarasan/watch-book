import { useTheme } from '@emotion/react';
import { StatusContainer } from './elements';

interface StatusProps {
  statusLabel?: string;
  statusValue?: number | string;
}

export const Status = ({ statusValue, statusLabel }: StatusProps) => {
  const theme: any = useTheme();
  return (
    <StatusContainer style={theme.employeeStatusbtn}>
      <div className={`status-${statusValue}`} />
      <div className={`label-${statusValue} ml-2`}>{statusLabel}</div>
    </StatusContainer>
  );
};
