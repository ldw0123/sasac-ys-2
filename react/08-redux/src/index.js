// ⭐ Ver 1. props drilling (props 지옥) 예시
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// ⭐ Ver 2. Redux 예시
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import AppRedux1 from './AppRedux1';

// import { Provider } from 'react-redux'; // react-redux 모듈에서 Provider 컴포넌트 불러오기
// import { configureStore } from '@reduxjs/toolkit'; // Redux Toolkit에서 제공하는 configureStore 함수 불러오기
// import { composeWithDevTools } from 'redux-devtools-extension'; // Redux Dev Tools 크롬 확장 프로그램

// const initialValue = { number: 100 }; // state의 number 초기값 설정

// // state 객체: {number: value}
// const reducer = (state = initialValue, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { number: state.number + 1 };
//     case 'DECREMENT':
//       return { number: state.number - 1 };
//     default:
//       return state; // 원래 state 그대로 반환
//   }
// };

// // configureStore() 함수: reducer 옵션을 통해 rootReducer를 전달받는다. store를 생성하고 초기화하는 데 사용된다
// // rootReducer: 애플리케이션에서 사용하는 모든 reducer를 하나로 결합한 루트 리듀서. 애플리케이션의 전체 상태를 관리하는 Redux store에서 사용되는 reducer의 조합
// // store 객체 : 상태(state)를 관리하는 객체. reducer() 함수들을 통해 상태를 변경하고, 변경된 상태를 컴포넌트에 전달한다. store는 Redux에서 단 하나만 존재해야 하며, 애플리케이션의 모든 상태를 포함하고 있다
// const store = configureStore({ reducer: reducer }, composeWithDevTools()); // store를 생성하고, 전역으로 제공

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // 리덕스를 사용하여 상태 관리를 할 때, 애플리케이션의 최상위 컴포넌트인 App 컴포넌트를 Provider로 감싸주어야 한다. 이를 통해 하위 컴포넌트들이 리덕스 스토어에 접근할 수 있게 된다
//   // store를 전역으로 사용
//   <Provider store={store}>
//     <AppRedux1 />
//   </Provider>
// );

// ⭐ Ver.3 Redux 구조화 (store 폴더 생성)
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import AppRedux2 from './AppRedux2';

// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';

// import rootReducer from './store'; // store 폴더에서 rootReducer 불러오기

// const store = configureStore({ reducer: rootReducer }, composeWithDevTools());
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // 하위 컴포넌트 트리 전체에 store 변수를 보내준다. 모든 컴포넌트가 store에 접근 가능해진다
//   <Provider store={store}>
//     <AppRedux2 />
//   </Provider>
// );

// ⭐ Ver.4 리덕스 구조화 + containers폴더 / components 폴더 컴포넌트 폴더를 생성해서 분리
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRedux3 from './AppRedux3';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './store';
// import AppReduxEx from './AppReduxEx';

const store = configureStore({ reducer: rootReducer }, composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AppRedux3 />
    <br />
    <hr />
    {/* 실습 */}
    {/* <AppReduxEx /> */}
  </Provider>
);
