import React from 'react';
import Root from '../components/root';

import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ThemeProvider } from 'styled-components';
import theme from './styles/themes/main';

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Root />
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
