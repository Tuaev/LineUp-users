import { createMuiTheme } from '@material-ui/core/styles';
import { indigo, common, blueGrey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  direction: 'ltr',
  typography: {
    fontFamily: `"Roboto",sans-serif`,
  },
  overrides: {
    MuiInputBase: {
      input: {
        '&::placeholder': {
          opacity: 1,
          color: blueGrey[600],
        },
      },
    },
  },
  palette: {
    type: 'light',
    action: {
      active: blueGrey[600],
    },
    background: {
      default: '#f4f6f8',
      dark: '#f4f6f8',
      paper: common.white,
    },
    primary: {
      main: indigo[600],
    },
    secondary: {
      main: '#5850EC',
    },
    danger: {
      main: '#B00020',
    },
    text: {
      primary: blueGrey[900],
      secondary: blueGrey[600],
    },
  },
});

export default theme;
