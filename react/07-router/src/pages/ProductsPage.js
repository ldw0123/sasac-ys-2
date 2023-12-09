import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductsPage() {
  const [product, setProduct] = useState(null);

  const getProducts = async () => {
    // fetch 함수를 사용하여 해당 URL에서 데이터를 가져옴
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // res.json()을 호출하여 가져온 데이터를 JSON 형식으로 변환
    const products = await res.json();
    setProduct(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div>여기는 상품 페이지</div>
      {product ? (
        <>
          {product.map((value) => (
            <ul key={value.id}>
              <li>상품 번호: {value.id}</li>
              <li>상품명: {value.title}</li>
              <li>상품 설명: {value.body}</li>
              <li>
                {/* /product/1, product/2, ... product/100 */}
                <Link to={`/product/${value.id}`}>상세페이지로 이동하기</Link>
              </li>
            </ul>
          ))}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
