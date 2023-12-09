// 실습

import { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

export default function PracticePageEx() {
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState('Loading...');
  const { id } = useParams();
  console.log(id);

  const [query, setQuery] = useSearchParams();
  console.log(query);
  console.log(query.get('name'));

  const navigator = useNavigate();

  const getPhoto = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${id}`
      );
      if (res.ok) {
        const prod = await res.json();
        setPhoto(prod);
      } else {
        throw Error('존재하지 않는 사진입니다');
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  useEffect(() => {
    getPhoto();
  }, []);

  return (
    <>
      <div>여기는 사진 상세 페이지</div>
      <br />
      <button onClick={() => navigator(-1)}>목록으로 이동</button>{' '}
      <button onClick={() => navigator(2)}>목록으로 이동</button>{' '}
      <button onClick={() => navigator('/')}>홈 이동</button>
      <br />
      <button onClick={() => setQuery({ name: 'codee', id: 5 })}>
        setQuery 테스트
      </button>
      {photo ? (
        <ul>
          <li>번호: {photo.id}</li>
          <li>사진명: {photo.title}</li>
          <img src={`${photo.url}`} />
        </ul>
      ) : (
        <div>{error}</div>
      )}
    </>
  );
}
