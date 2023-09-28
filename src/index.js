import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material';
import App from './App'

const theme = createTheme({
  palette: {
    primary: {
      main: '#3ede7b'
    },
    secondary: {
      main: '#8a8a8a'
    }
  },
  typography: {
    fontFamily: [
      'Inter'
    ]
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
);
