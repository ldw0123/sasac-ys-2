import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // BrowserRouter, Routes, Route 컴포넌트 불러오기
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import PracticePage from './pages/Practice/PracticePage';
import PracticeDetailPage from './pages/Practice/PracticeDetailPage';

import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    // BrowserRouter 컴포넌트 : HTML5를 지원하는 브라우저의 주소 감지. 라우터 설정 및 관리 역할. 최상위 컴포넌트
    // BrowserRouter가 Routes, Route를 감싼다
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          {/* path가 localhost:3000 일 때 HomePage 컴포넌트를 불러오겠다는 뜻 */}
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          {/* "~/:id" - 동적 경로 매개변수. 하나의 변수처럼 사용 가능.  "/products/" 다음에 오는 경로를 나타내며, :id는 동적으로 변하는 값이 될 수 있는 경로 매개변수 */}
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/photos" element={<PracticePage />} />
          <Route path="/photos/:id" element={<PracticeDetailPage />} />

          {/* path="*" 은 가장 마지막에 두어야 한다 (404) */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
