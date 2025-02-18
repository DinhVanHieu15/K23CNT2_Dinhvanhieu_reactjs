import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DvhApp from './DvhApp';
import reportWebVitals from './reportWebVitals';

const Dvhroot = ReactDOM.createRoot(document.getElementById('Dvhroot'));
Dvhroot.render(
  <React.StrictMode>
    <DvhApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
