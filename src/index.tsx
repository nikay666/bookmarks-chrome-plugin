import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';

import AppPage from '~/pages/app';

import {store} from '~/store';
import { theme } from '~/theme';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AppPage />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
