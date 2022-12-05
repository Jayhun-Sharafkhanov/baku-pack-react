import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import AlertProvider from 'context/AlertContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import theme from 'theme';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AlertProvider>
        <BrowserRouter>
          <CssBaseline />
          <App />
        </BrowserRouter>
      </AlertProvider>
    </ThemeProvider>
  </React.StrictMode>
);

