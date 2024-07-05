import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ccff00', // Your primary color
    },
    secondary: {
      main: '#ffaa4d', // Your secondary color
    },
    background: {
      default: '#1f1c2c',
      paper: '#2c3e50',
    },
    text: {
      primary: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;
