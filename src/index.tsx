import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';

import './index.css';
import { SettingsPanelBackground, SettingsPanelBase } from './modules/settings';
import AppPage from './pages/app';
import SettingsPage from './pages/settings';
import { theme } from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppPage />,
  },
  {
    path: '/settings',
    element: <SettingsPage />,
  },
]);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
