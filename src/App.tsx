import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NewContextProvider } from './providers/NewContextProvider';
import { Router } from './routes';
import { theme } from './styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <NewContextProvider>
      <Router />
    </NewContextProvider>
  </ThemeProvider>
);

export default App;
