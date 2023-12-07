import { useMemo, useState } from 'react';

export default function UseMemoEx() {
  const [text, setText] = useState('');
  const [searchWord, setSearchWord] = useState('');

  // useMemo를 사용하여 단어 빈도수 계산 결과를 메모이제이션
  const wordCount = useMemo(
    (text, word) => {
      // 입력받은 문자열와 찾고자 하는 단어가 빈 문자열이 아닌 경우에만 계산
      // trim()을 통해 각 인자의 문자열 양 끝의 공백을 제거한 결과가 있다면 검색을 하고, 없다면 0을 반환
      if (text.trim() && word.trim()) {
        const words = text.split(' '); // split(' ') : text를 공백으로 나눠 words에 배열로 저장
        return words.filter((w) => w.includes(word)).length; // filter(찾을 값) : word를 포함하고 있는 요소만 모아서 해당 요소의 개수를 boolean값으로 반환
      }
      // 빈 문자열인 경우 0 반환
      // return 0;
    },
    // text와 searchWord 어떤 값이라도 변화가 있으면 callback함수 실행
    [text, searchWord]
  );

  return (
    <>
      <h3>useMemo 실습</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="텍스트를 입력하세요"
      />
      <br />
      <input
        type="text"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        placeholder="찾을 단어를 입력하세요"
      />
      <br />
      <p>
        "{searchWord}" 단어의 빈도수: {wordCount}
      </p>
    </>
  );
}
