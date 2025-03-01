import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './app-router';

import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
};

export default App;
