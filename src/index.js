import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from "@mui/material";

import App from './components/app';
import store from './store/store'
import { theme } from './theme'
import './firebase'

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App/>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

