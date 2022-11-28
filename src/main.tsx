import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { StoreProvider } from './store';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
);
