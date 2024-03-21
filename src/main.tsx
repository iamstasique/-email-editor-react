import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './Home.js';
import './index.css';
import { Provider } from './Provider.js';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider>
      <Home />
    </Provider>
  </React.StrictMode>
);
