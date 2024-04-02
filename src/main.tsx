import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Home } from './Home.js';
import { CustomQueryClientProvider } from './Provider.js';
import './index.css';
import { STORE } from './store/index.js';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');


ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={STORE}>
      <CustomQueryClientProvider>
        <Home />
      </CustomQueryClientProvider>
    </Provider>
  </React.StrictMode>
);
