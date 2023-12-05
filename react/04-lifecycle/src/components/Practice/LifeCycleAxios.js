import { useEffect, useState } from 'react';
import axios from 'axios'; // axios 불러오기

const LifeCycleAxios = (props) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // JSON Placeholder 사이트에서 데이터를 가져오는 Axios 요청
      const fetchData = async () => {
        try {
          // 요청이 성공하면 데이터를 state로 설정하고 로딩 상태 변경
          const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
          );
          setPosts(response.data);
          setLoading(false);
        } catch (error) {
          // 요청이 실패하면 에러를 처리하고 로딩 상태 변경
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };
      fetchData();
    }, 2000);
  }, []);

  return (
    <div>
      <hr />
      <h3>함수형 컴포넌트 LifeCycle 실습 Axios</h3>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LifeCycleAxios;
