import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 콘솔에 두 번 찍히는 모드
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
