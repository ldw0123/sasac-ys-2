// ⭐ 배열의 구조분해 할당 destructuring
const fruits = ['apple', 'banana', 'grape'];

const [apple2, banana2, grape2, strawberry = 'strawberry'] = fruits;
console.log(apple2, strawberry);

// 사실상 아래 코드와 동일함
// const apple2 = fruits[0];
// const banana2 = fruits[1];
// const grape2 = fruits[2];

const obj = {
  name: 'lily',
  gender: '여',
  age: 99,
};

const { age, name, test = 'test' } = obj;
console.log(age, test);

// key 이름을 바꾸는 방법
// const { age, name: name2 } = obj;
// console.log(age, name2);

// 사실상 아래 코드와 동일함
// const age = obj.age;
// const name = obj.name;
// const gender = obj.gender;

// ⭐ 두 변수의 값 교환

// 일반적으로 치환하는 법
// let temp = x;
// x = y; // x = 3, y = 3, temp = 1
// y = temp; // y = 1

// 배열 구조분해를 이용하여 간단히 치환하는 법
let x = 1,
  y = 3;
// x에 y를 넣고, y에 x를 넣겠다는 뜻. 치환이 가능
[x, y] = [y, x];
console.log(x, y, '\n');

// ⭐ 전개 구문 spread
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c', 'd', 'e'];

const arr3 = [...arr1, ...arr2];
console.log('arr3', arr3);

// hello = ['h', 'e', 'l', 'l', 'o']
const hello = [...'hello'];
console.log('hello', hello);

const obj2 = {
  name: 'lily',
  gender: '여',
  age: 99,
};

const obj3 = {
  ...obj2,
  test: 'test', // key, value 추가
};

console.log('obj3', obj3);
console.log('\n');

// ⭐ rest 파라미터
const values = [10, 20, 30, 40];
function get(a, ...rest) {
  console.log('a', a); // 10
  // ...rest에 남은 인자들이 배열 형태로 들어 옴
  console.log('rest', rest); // [20, 30, 40]
}

get(...values);
