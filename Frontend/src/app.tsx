import React from 'react';
import AppRouter from './app-router';
import { Provider } from 'react-redux';
import store from './redux/store';
import SpinnerProvider from './components/spinner';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <SpinnerProvider>
          <AppRouter />
        </SpinnerProvider>
      </Provider>
    </>
  );
};

export default App;
