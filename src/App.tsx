import React from 'react';
import { Provider } from 'react-redux';

import { NewContextProvider } from './providers/NewContextProvider';
import { Router } from './routes';
import store from './store';

const App = () => (
  <NewContextProvider>
    <Provider store={store}>
      <Router />
    </Provider>
  </NewContextProvider>
);

export default App;
