// ⭐ Ver.4
// containers 폴더: redux store에 직접적으로 접근하는 컴포넌트를 모아두기 위해서 생성
// components 폴더: 보통 presentational 컴포넌트만 저장. redux store에 직접 접근하지 않고, UI를 담당하는 컴포넌트를 모아둔다

import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from './store/counterReducer'; // counterReducer.js에서 만든 함수 불러오기
import { Box1Container } from './containers/BoxesContainer';

function AppRedux3() {
  return (
    <div>
      <Box1Container />
    </div>
  );
}

export default AppRedux3;
