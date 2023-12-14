// 컴포넌트 분리 (props를 넘겨주는 컴포넌트 구조화 예시를 위해)
// <table> 태그 분리
import CommentTr from './CommentTr';
import { CommentRow } from '../types/types'; // interface 불러오기

// Props interface 정의
interface Props {
  comments: CommentRow[];
  // optinal key
  test?: string; // props에 넘겨주지 않아도 오류가 발생하지 않는다
}

// TS와 함께하는 리액트에서는 props도 당연히 type을 지정해 주어야 한다!
// { comments }: Props - props를 구조분해해서 받음
export default function CommentTable({ comments, test }: Props) {
  return (
    <>
      <table border={1} style={{ marginTop: '30px', width: '500px' }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((value, idx) => {
            // CommentTr.tsx로 props로 값을 넘겨준다
            return <CommentTr key={idx} comment={value} idx={idx} />;
          })}
        </tbody>
      </table>
    </>
  );
}
