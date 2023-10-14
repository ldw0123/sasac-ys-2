// 💡 CommonJS 모듈 불러오기

// ------- case 1 -------
// 파일에서 한 개의 식별자만 내보내는 경우.
// const add = require('./math.cjs'); // add 함수 불러오기

// const sum = add(2, 3);

// console.log(add);
// console.log(sum);

// ------- case 2 -------
// 파일에서 여러 개의 식별자를 객체 형태로 내보내는 경우.
// 모듈을 받아올 때 객체를 그대로 math라는 식별자로 받는다.
const math = require('./math.cjs');

const sum1 = math.add(3, 5);
const sum2 = math.minus(5, 2);

console.log(sum1);
console.log(sum2);
console.log(math.PI);

// ------- case 3 -------
// 파일에서 여러 개의 식별자를 객체 형태로 내보내는 경우.
// 특정 식별자(add, minus)만 필요한 경우, 객체 구조분해 할당 문법을 통해 받아올 수 있다.
// const { add, minus } = require('./math.cjs'); // add, minus함수만 가져옴

// const sum = add(2, 3);
// console.log(sum);
// console.log(PI) // 오류 발생
