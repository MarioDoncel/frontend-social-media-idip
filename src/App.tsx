import React from 'react';

import { NewContextProvider } from './providers/NewContextProvider';
import { Router } from './routes';

const App = () => (
  <NewContextProvider>
    <Router />
  </NewContextProvider>
);

export default App;
