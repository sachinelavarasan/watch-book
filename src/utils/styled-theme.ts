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
  authFormBg: { backgroundColor: string };
  custom: {
    backgroundColor: string;
    color: string;
  };
  buttonStyle: {
    backgroundColor: string;
    color: string;
  };
  authLinkStyle: {
    color: string;
  };
  componentTitle: {
    color: string;
  };
  fieldsBorder: {
    borderColor: string;
  };
  labelStyle: {
    color: string;
  };
  tableStyle: { backgroundColor: string };
  tableHeadStyle?: {
    backgroundColor: string;
    outlineColor: string;
    color: string;
  };
  tableBodyRowStyle?: {
    backgroundColor?: string;
    outlineColor: string;
    color: string;
    hoverBackgroundColor?: string;
  };
  employeeStatusbtn?: {
    backgroundColor: string;
  };
  paginationText: {
    color: string;
  };
  paginationStyle: {
    backgroundColor: string;
    borderColor: string;
    color: string;
  };
  selectInputStyle: {
    backgroundColor: string;
    borderColor: string;
    inputStyle: {
      color: string;
    };
    list: {
      color: string;
    };
  };
  sideNavbarStyle: {
    backgroundColor: string;
    borderRightColor: string;
    iconContainerActive?: {
      backgroundColor?: string;
    };
    iconStyle: {
      color: string;
    };
  };
}

const darkTheme: ThemesProps = {
  appMainContainer: { backgroundColor: '#0c0116' },
  authFormBg: {
    backgroundColor: '#2c183d',
  },
  custom: {
    backgroundColor: '#0c0116',
    color: '#fff',
  },
  buttonStyle: {
    backgroundColor: '#e8e9f3',
    color: '#0c0116',
  },
  authLinkStyle: {
    color: '#fff',
  },
  componentTitle: {
    color: '#fff',
  },
  fieldsBorder: {
    borderColor: '#1a0131',
  },
  labelStyle: {
    color: '#d2d2d2',
  },
  tableStyle: {
    backgroundColor: '#2c183d',
  },
  tableHeadStyle: {
    backgroundColor: 'rgb(56 36 73)',
    outlineColor: '#190d24',
    color: '#fff',
  },
  tableBodyRowStyle: {
    // backgroundColor: '#21122f',
    outlineColor: '#1b0f26',
    color: '#f3f3f3',
    hoverBackgroundColor: '#4c346233',
  },
  employeeStatusbtn: {
    backgroundColor: '#c7c7c70d',
  },
  paginationText: {
    color: '#a9a9a9',
  },
  paginationStyle: {
    backgroundColor: '#1b0f26',
    borderColor: '#190d24',
    color: '#a9a9a9',
  },
  selectInputStyle: {
    backgroundColor: 'rgb(27, 15, 38)',
    borderColor: '#3f2e4e',
    inputStyle: {
      color: '#a9a9a9',
    },
    list: {
      color: '#fff',
    },
  },
  sideNavbarStyle: {
    backgroundColor: '#0c0016',
    borderRightColor: '#27103a',
    iconContainerActive: {
      backgroundColor: 'rgb(56 36 73)',
    },
    iconStyle: {
      color: '#fff',
    },
  },
};

const lightTheme: ThemesProps = {
  appMainContainer: { backgroundColor: 'rgba(228 197 255 / 11%)' },
  authFormBg: {
    backgroundColor: '#fff',
  },
  palette: {
    mode: 'light',
  },
  custom: {
    backgroundColor: '#f5f5f5',
    color: '#000',
  },
  buttonStyle: {
    backgroundColor: 'rgb(56 36 73)',
    color: '#e8e9f3',
  },
  authLinkStyle: {
    color: '#1a0131',
  },
  componentTitle: {
    color: '#000',
  },
  fieldsBorder: {
    borderColor: 'rgb(217, 216, 216)',
  },
  labelStyle: {
    color: '#484848',
  },
  tableStyle: {
    backgroundColor: '#ffffff',
  },
  tableHeadStyle: {
    backgroundColor: '#fff',
    outlineColor: '#f5f5f5',
    color: '#000',
  },
  tableBodyRowStyle: {
    backgroundColor: 'transparent',
    outlineColor: 'rgb(217, 216, 216)',
    color: '#0e0e0e',
    hoverBackgroundColor: 'rgb(56 36 73 / 4%)',
  },
  employeeStatusbtn: {
    backgroundColor: '#f6f6f6',
  },
  paginationText: {
    color: '#a9a9a9',
  },
  paginationStyle: {
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: 'rgb(217, 216, 216)',
    color: '#a9a9a9',
  },
  selectInputStyle: {
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: 'rgb(217, 216, 216)',
    inputStyle: {
      color: '#a9a9a9',
    },
    list: {
      color: '#000',
    },
  },
  sideNavbarStyle: {
    backgroundColor: '#fff',
    borderRightColor: '#ddd',
    iconContainerActive: {
      backgroundColor: 'rgb(56 36 73)',
    },
    iconStyle: {
      color: 'rgb(56 36 73)',
    },
  },
};

export const themes = {
  lightTheme: createTheme(lightTheme),
  darkTheme: createTheme(darkTheme),
};
