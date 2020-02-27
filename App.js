import React from 'react';
import {
  Typography,
  ThemeProvider
} from '@material-ui/core';
import theme from './theme';

import Nav from './components/navigation/Nav';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
    </ThemeProvider>
  )
}

export default App;