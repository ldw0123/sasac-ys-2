import { useEffect, useState } from 'react';

const LifeCycleFetch = (props) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 마운트되고 2초 뒤에 post의 값을 fakePosts의 값으로 변경
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setTimeout(() => {
          setPosts(res);
        }, 2000);
      });
  }, []);

  // const getPosts = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  //   const posts = await response.json();
  //   setTimeout(() => {
  //     setPosts(posts);
  //   }, 2000);
  // };

  // // useEffect의 인자로 async를 넣을 수 없음
  // useEffect({
  //   getPosts();
  // }, []);

  return (
    <div>
      <hr />
      <h3>함수형 컴포넌트 LifeCycle 실습 Fetch</h3>
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

export default LifeCycleFetch;
