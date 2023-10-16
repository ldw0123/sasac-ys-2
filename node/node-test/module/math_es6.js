const add = (a, b) => a + b;
const minus = (a, b) => a - b;
const PI = 3.14;

// 1) 하나만 내보낼 경우
// export default add; // es6 문법

// module.exports = add // CommonJs 문법. 위 코드와 동일

// 2) 여러 개를 내보낼 경우

export { add, minus }; // es6 문법
export default PI; // default로 export 하고 있음

// module.export = { // CommonJs 문법. 위 코드와 동일
//   add,
//   minus
// }
