import { useCallback, useEffect, useState } from 'react'; // useCallback(), useEffect(), useState() hook 불러오기

export default function UseCallback2({ postId }) {
  const [post, setPost] = useState();
  const [text, setText] = useState();

  // postId가 변경될 때마다 이 함수가 다시 선언된다
  const fetchData = useCallback(async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const post = await res.json();
    setPost(post);
  }, [postId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <h2>useCallback 공부 2</h2>
      <div>조회한 post Id: {postId}</div>

      {post && (
        <div>
          <div>id: {post.id}</div>
          <div>title: {post.title}</div>
          <div>body: {post.body}</div>
        </div>
      )}
    </>
  );
}
