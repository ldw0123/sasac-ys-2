// JS : const str = "hello"
const str: string = 'hello';
console.log(str);

// JS : let num = 5
let num: number = 5;

let undif1: undefined;
let undif2: undefined = undefined;
// undif = 3; // error

let nu: null = null;
// nu = 3 // error

// 숫자 배열
let arr1: number[] = [1, 2, 3, 4, 5];
// let arr2: number[] = [1, 2, 3, 4, 'abc']; // error

// 문자열 배열
let strArr1: string[] = ['abc', 'def'];
let strArr2: Array<string> = ['abc', 'def']; // 이런 방법도 있음

// 숫자 or 문자열 타입 둘 다 가능
let numStrArr1: (number | string)[] = [1, 'a'];
let numStrArr2: number | string = 1;
numStrArr2 = 5;
let numStrArr3: number | string = 'a';
let numStrArr4: Array<number | string> = ['123', 'abc'];

// any: 아무 타입이나 가능. 하지만 지양해야 함
let anyArr: any[] = [1, 'a', null, undefined, {}];

// 객체 배열
let obj1: object = {
  name: 'lily',
};

// interface, type
let obj2: object = {
  name: 'lily',
};

// Tuple
let drink1: [string, number] = ['cola', 2500]; // 타입 선언을 하고, 초기화
console.log(drink1[0]);
drink1[0] = 'juice';
console.log(drink1[0]);
// drink1[2] = 'juice'; // error. tuple의 길이는 2로 고정
drink1.push('이건 되지롱 하하'); // push()로 길이 3으로 만들 수 있다 -> Tuple의 한계
// console.log(drink1[2]); // error. 직접 접근은 불가
console.log(drink1);

let drink2: readonly [string, number] = ['cola', 2500]; // 읽기만 가능
// drink2[0] = 'soda'; // error. 변경 불가
// drink2.push('이건 안 되네......'); // error. push()로도 변경 불가

// enum
// 날씨들 sunny, rainy, cloudy
enum Weather1 {
  sunny = 'sunny',
  rainy = 'rainy',
  cloudy = 'cloudy',
}
console.log(Weather1.sunny);
console.log(Weather1.rainy);

enum Weather2 {
  sunny, // 0
  rainy, // 1
  cloudy, // 2
}
console.log(Weather2.sunny); // 0

const weather = 0;
if (weather == Weather2.sunny) {
  console.log('맑은 날씨');
}

let aaa: Weather2 = 2;
// let aaa: Weather2 = 3; // error
