// ⭐ Ver.4
// containers 폴더: redux store에 직접적으로 접근하는 컴포넌트를 모아두기 위해서 생성
// components 폴더: 보통 presentational 컴포넌트만 저장. redux store에 직접 접근하지 않고, UI를 담당하는 컴포넌트를 모아둔다

import './App.css';
import { Box1Container } from './containers/BoxesContainer';

function AppRedux3() {
  return (
    <div>
      <h2>
        <i>
          Ver.4 리덕스 구조화 + containers 컴포넌트 폴더 / presentational
          컴포넌트 폴더를 생성해서 분리
        </i>
      </h2>
      <Box1Container />
    </div>
  );
}

export default AppRedux3;
