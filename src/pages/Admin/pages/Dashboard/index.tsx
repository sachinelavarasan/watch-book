import { useTheme } from '@emotion/react';
import { DashboardContainer } from './elements';

export const Dashboard = () => {
  const theme: any = useTheme();
  return (
    <DashboardContainer>
      <div className="component-title" style={theme.componentTitle}>
        DashBoard
      </div>
    </DashboardContainer>
  );
};
