import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ScrollToTop from './Helper/ScrollToTop.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
