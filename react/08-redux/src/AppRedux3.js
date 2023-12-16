// ⭐ Ver.4
// containers 폴더: redux store에 직접적으로 접근하는 컴포넌트를 모아두기 위해서 생성
// components 폴더: 보통 presentational 컴포넌트만 저장. redux store에 직접 접근하지 않고, UI를 담당하는 컴포넌트를 모아둔다

// Container 컴포넌트: 상태 관리, 데이터 로직, 비동기 작업과 같은 기능적인 부분을 담당한다
// Presentational 컴포넌트: 주로 UI를 그리고 스타일과 레이아웃을 담당하고, 화면에 렌더링하는 역할. 데이터를 가져오거나 상태를 관리하지 않는다
import './App.css';
import { Box1Container } from './containers/BoxesContainer';

function AppRedux3() {
  return (
    <div>
      <h2>
        <i>
          Ver.4 리덕스 구조화 + containers폴더 / components 폴더 컴포넌트 폴더를
          생성해서 분리
        </i>
      </h2>
      <Box1Container />
    </div>
  );
}

export default AppRedux3;
