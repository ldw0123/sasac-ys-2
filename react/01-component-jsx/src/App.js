import './App.css'; // App.css 불러오기
import ClassComponent from './components/ClassComponent'; // ClassComponent.js 불러오기
import FuncComponent from './components/FuncComponent'; // FuncComponent.js 불러오기
import FuncPropsEx from './components/FuncPropsEx'; // FuncPropsEx.js 불러오기
import Section from './components/Section'; // Section.js 불러오기
import ClassPropsEx from './components/ClassPropsEx'; // ClassPropsEx.js 불러오기

import PracPropsEx from './components/PracPropsEx'; // 실습
import PracClassComponent from './components/PracClassComponent'; // 실습

import axios from 'axios'; // Axios import

const name2 = '핑핑이';
const animal2 = '강아지';
let a = 5;
let b = 4;
const title = 'Hello World';

// spring boot 프로젝트와 axios 통신
function App() {
  // 로그인
  const login = async () => {
    axios.post('/auth/signin');
    localStorage.setItem('accessToken', res.data.token); // spring에서 token이라는 키를 보냈기 때문에 받아올 수 있다
  };

  // todo : 회원인 사람만 접속할 수 있는 url
  // 회원 여부를 판단하기 위해 jwt에 넣어 보낸다
  const getData = async () => {
    const res = await axios.get('/todo', {
      headers: {
        Autorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
  };

  // 로그아웃
  const logout = async () => {
    localStorage.removeItem('accessToken');
  };

  //////////////////////////////////////////////////////////////

  return (
    <div>
      {/* FuncComponent() 불러오기 */}
      <FuncComponent />

      {/* <FuncComponent></FuncComponent> */}
      <br />

      {/* ClassComponent() 불러오기 */}
      <ClassComponent />
      <br />

      {/* FuncPropsEx() 불러오기 */}
      <FuncPropsEx title="SeSAC" content="hello world" number="{5}" />
      <FuncPropsEx content="hello world" number={5} />

      {/* ClassPropsEx() 불러오기 */}
      <ClassPropsEx title="SeSAC" content="hello world" number="{5}" />

      {/* Section() 불러오기 */}
      {/* props.children : 부모 컴포넌트에서 자식 컴포넌트를 호출할 때 태그 사이에 작성한 문자열 */}
      <Section title="SeSAC 영역">
        <div>SeSAC 영역의 content입니다</div> {/* children */}
      </Section>
      <Section title="코딩온 영역">
        <h5>코딩온 영역의 content입니다</h5>
      </Section>
      <br />

      {/* 실습1 */}
      <h4>제 반려 동물의 이름은 {name2}입니다.</h4>
      <h4>
        {name2}는 {animal2}입니다.
      </h4>
      <h4>{3 + 5 === 8 ? '정답입니다!' : '오답입니다!'}</h4>
      {/* 실습3 */}
      <h4>{a > b ? 'a가 b보다 큽니다' : 'b가 a보다 큽니다'}</h4>
      {/* 실습4 */}
      <>
        <div className="practice1">{title}</div>
        <br />
        <div className="practice2">
          아이디: <input type="text" />
          <br />
          <br />
          비밀번호: <input type="password" />
        </div>
        <br />
      </>
      {/* 실습 */}
      <PracPropsEx
        food="깍두기"
        title="나의 하루는 4시 30분에 시작된다"
        author="김유진"
        price="13,500원"
        type="자기계발서"
      />
      <PracClassComponent text="클래스형 컴포넌트 props 실습입니다" />
    </div>
  );
}

export default App;
