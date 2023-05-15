import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Blend from './pages/Blend'
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Success from './pages/Success';

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
      <Router>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route exact path='/blend' element={<Blend />}/>
          <Route exact path='/success' element={<Success />}/>
        </Routes>
      </Router>
    </ThemeProvider>
);
