// 실습 Spread 연산자 사용하기
// 두 개의 문자열을 합쳐서 배열로 만들기

const word1 = 'abc';
const word2 = 'xyz';

const word3 = [...word1, ...word2];

console.log('word3', word3);
