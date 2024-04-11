import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Home } from './Home.js';
import './index.css';
import { STORE } from './store/index.js';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={STORE}>
      <Home />
    </Provider>
  </React.StrictMode>
);
