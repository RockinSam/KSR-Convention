import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { NavContextProvider } from './store/nav-context';


ReactDOM.render(
  <NavContextProvider>
    <BrowserRouter>   
      <App />
    </BrowserRouter>
  </NavContextProvider>,
  document.getElementById('root')
);