// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App.js';

// Import BrowserRouter untuk routing
import { BrowserRouter } from 'react-router-dom';

// Load environment variables
require('dotenv').config();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);