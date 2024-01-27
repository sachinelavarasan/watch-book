// ThemeProvider.tsx
import { PropsWithChildren } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import theme from './theme';
import { themes } from './styled-theme';
import { useAppSelector } from '../redux/store';
import { authSelector } from '../redux/slices/authSlice';
import { CssBaseline } from '@mui/material';

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const currentTheme = useAppSelector(authSelector);
  // const theme = localStorage.getItem('theme');
  // console.log(theme);
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
