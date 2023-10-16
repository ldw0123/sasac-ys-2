// 1) 하나만 내보낼 경우
// math_es6 파일에서 default로 export하고 있는 식별자를 add2라는 식별자로 받아 옴
// import add2 from './math_es6.js'; // es6 문법
// console.log(add2);
// console.log(add2(2, 3));

// 2) 여러 개를 내보낼 경우
// es6 문법에서 모듈을 import 할 때, 구조분해 없이 식별자를 만들어서 받아오는 방법은 module 파일(math_es6.js)에 default로 export하는 값이 있어야 한다!

// math_es6 파일에서 default로 export하고 있는 식별자(변수 PI)를 math라는 식별자로 받아 옴 + add와 minus 함수를 받아 옴
import math, { add, minus } from './math_es6.js'; // es6 문법
console.log(math); // PI의 값
console.log(add(2, 3)); // add 함수 사용
console.log(minus(5, 2)); // minus 함수 사용

// console.log(math.add(2, 3)) 오류 발생!!
