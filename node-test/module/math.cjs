// 💡 CommonJS 모듈 내보내기

// 중괄호가 없으면 한 줄밖에 작성 불가
const add = (a, b) => a + b;
// add함수와 add2함수는 완전 동일
// const add2 = (a, b) => {
//   return a + b
// }
const minus = (a, b) => a - b;
const PI = 3.14;

// ------- case 1 -------
// 파일에서 한 개의 식별자만 내보내는 경우.

// module.exports = add;

// const data = {
//   add: add,
//   minus: minus,
//   PI: PI
// }

// {
//   name: "lily";
//   gender: "여";
// }

// const add2 = (a, b) => {
//   return a + b;
// };

// ------- case 2, 3 -------
// 파일에서 여러 개의 식별자를 객체 형태로 내보내는 경우.
module.exports = {
  // 객체의 형태로 작성
  add, // 함수 이름만. 괄호x
  minus,
  PI,
};

// ------- case 2, 3 -------
// 파일에서 여러 개의 식별자를 객체 형태로 내보내는 경우.
// module.exports.add = (a, b) => a + b;
// module.exports.minus = (a, b) => a - b;
// module.exports.PI = 3.14;
// {
//   add,
//   minus,
//   PI,
// };
