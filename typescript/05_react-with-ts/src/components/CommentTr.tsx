// 컴포넌트 분리
// <tr> 태그 분리
import { CommentRow } from '../types/types'; // interface 불러오기

interface Props {
  comment: CommentRow;
  idx: number;
}

export default function CommentTr({ comment, idx }: Props) {
  return (
    <>
      <tr>
        <td>{idx + 1}</td>
        <td>{comment.title}</td>
        <td>{comment.writer}</td>
      </tr>
    </>
  );
}
