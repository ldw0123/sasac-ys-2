// <header> 태그 컴포넌트화
import { Link } from 'react-router-dom'; // Link 컴포넌트 불러오기

export default function Header() {
  return (
    <>
      <header className="Header">
        <div className="logo">Router Study</div>
        <nav>
          <div>
            {/* a 태그 : 페이지를 새로고침하면서 페이지 이동을 함 */}
            {/* Link 컴포넌트 : 컴포넌트만 변경하면서, 브라우저를 새로고침하지 않고 이동함 */}
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/products">Product</Link>
          </div>
          <div>
            <Link to="/photos">Photo</Link>
          </div>
        </nav>
      </header>
    </>
  );
}
