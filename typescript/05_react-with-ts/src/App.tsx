import './App.css';
import Origin from './components/Origin';
import PostList from './components/Practice/PostList';
import TsComponent from './components/TsComponent';

function App() {
  return (
    <div>
      {/* 공부 - 리액트 4번 실습 파일 */}
      <Origin />
      <hr />
      <TsComponent />
      <hr />
      {/* 실습 */}
      <PostList />
    </div>
  );
}

export default App;
