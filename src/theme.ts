
import { createTheme, responsiveFontSizes } from '@mui/material';
import '@fontsource/roboto/200.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



let theme = createTheme({
  palette: {
    mode:'light',
    primary: {
      main: '#1f1f1f',
    },
    secondary: {
      main:'#ff6501',
    },
  },
  typography:{
    fontFamily:'Roboto',
    fontWeightLight: 200,   // 👈 ExtraLight
    fontWeightRegular: 300,
    fontWeightMedium: 400,

    body1: {
      fontWeight: 200,
    },
    body2: {
      fontWeight: 200,
    },
    h1: {
      fontWeight: 200,
      letterSpacing: '0.02em',
    },
    h2: {
      fontWeight: 200,
    },
    
  }
});
theme = responsiveFontSizes(theme);

export default theme;
