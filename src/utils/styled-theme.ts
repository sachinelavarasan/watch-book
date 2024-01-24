// styled-theme.ts
import { createTheme, ThemeOptions } from '@mui/material/styles';
import '@emotion/react';
import { useTheme } from '@emotion/react';

// Extend the MUI theme with Emotion's styled theme
declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      backgroundColor: string;
      textColor: string;
    };
  }
}

export interface ThemesProps extends ThemeOptions {
  appMainContainer: { backgroundColor: string };
  custom: {
    backgroundColor: string;
    textColor: string;
  };
}

const darkTheme: ThemesProps = {
  appMainContainer: { backgroundColor: '#390b24' },
  custom: {
    backgroundColor: '#390b24',
    textColor: 'darkblue',
  },
};

const lightTheme: ThemesProps = {
  appMainContainer: { backgroundColor: '#f5f5f5' },
  custom: {
    backgroundColor: '#f5f5f5',
    textColor: 'darkblue',
  },
};

export const themes = {
  lightTheme: createTheme(lightTheme),
  darkTheme: createTheme(darkTheme),
};
