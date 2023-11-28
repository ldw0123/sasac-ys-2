import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> 콘솔이 2번 찍히는 개발 모드
  // <App /> : App.js 불러오기
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
