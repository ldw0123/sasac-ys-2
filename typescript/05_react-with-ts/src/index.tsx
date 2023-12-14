import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 타입 단언. as 키워드
// TS 컴파일러는 null, undefined값이 가능하다고 해석하고 있고, 개발자가 #root가 존재한다고 단언할 수 있을 때 사용
// 사용법: 변수 as 타입
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
