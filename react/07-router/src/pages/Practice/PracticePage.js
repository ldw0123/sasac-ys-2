// 실습

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function PracticePage() {
  const [photo, setPhoto] = useState(null);

  const getPhotos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');

    const Photos = await res.json();
    setPhoto(Photos);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <>
      <div>여기는 사진 페이지</div>
      {photo ? (
        <>
          {photo.map((value) => (
            <ul key={value.id}>
              <li>사진 번호: {value.id}</li>
              <li>사진명: {value.title}</li>
              <img src={`${value.thumbnailUrl}`} />
              <li>
                <Link to={`/photos/${value.id}`}>상세페이지로 이동하기</Link>
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
