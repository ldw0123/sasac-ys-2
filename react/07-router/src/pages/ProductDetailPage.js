import { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

export default function ProductDetailPage() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('Loading...');
  // useParams() : 라우터에 있는 params를 가져온다
  const { id } = useParams();
  console.log(id);
  // product/:id/:name
  // params는 { id: value, name: value } 형태

  // useSearchParams() : QueryString을 가져온다
  const [query, setQuery] = useSearchParams();
  // ~~?id=2&name=lily
  console.log(query); // URLSearchParams {size: 1}
  console.log(query.get('name')); // lily

  // useNavigate() : Link 컴포넌트를 이용하지 않고, js 함수 내부에서 페이지를 이동시키는 코드를 작성할 때
  const navigator = useNavigate();

  const getProduct = async () => {
    try {
      // 오류가 일어날 수 있는 코드를 try 안에 넣는다
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      // res 객체의 ok 속성을 확인. 응답이 성공하면 true
      if (res.ok) {
        const prod = await res.json();
        setProduct(prod);
      } else {
        // 에러를 발생시킨다(던진다)
        throw Error('존재하지 않는 상품입니다');
      }
    } catch (error) {
      // try 안에서 오류가 발생하면 catch로 이동된다
      console.log(error);
      setError(error.message);
    }
    // navigator(-1);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div>여기는 상품 상세 페이지</div>
      <br />
      {/* Navigate(-1) : 한 페이지 뒤로 이동 */}
      <button onClick={() => navigator(-1)}>목록으로 이동</button>{' '}
      <button onClick={() => navigator(2)}>목록으로 이동</button>{' '}
      <button onClick={() => navigator('/')}>홈 이동</button>
      <br />
      {/* setQuery: 새로운 쿼리를 만들어서 이동시키는 역할 */}
      <button onClick={() => setQuery({ name: 'codee', id: 5 })}>
        setQuery 테스트
      </button>
      {product ? (
        <ul>
          <li>번호: {product.id}</li>
          <li>상품명: {product.title}</li>
        </ul>
      ) : (
        <div>{error}</div>
      )}
    </>
  );
}
