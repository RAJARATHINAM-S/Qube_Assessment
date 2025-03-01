import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);
