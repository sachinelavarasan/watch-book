// ThemeProvider.tsx
import React, { ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import theme from './theme';
import { themes } from './styled-theme';
import { useAppSelector } from '../redux/store';
import { authSelector } from '../redux/slices/authSlice';
import { CssBaseline } from '@mui/material';

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const currentTheme = useAppSelector(authSelector);
  return (
    // <MuiThemeProvider theme={theme}>
    <EmotionThemeProvider
      theme={currentTheme.theme == 'dark' ? themes.darkTheme : themes.lightTheme}>
      <CssBaseline />
      {children}
    </EmotionThemeProvider>
    // </MuiThemeProvider>
  );
};

export default ThemeProvider;
