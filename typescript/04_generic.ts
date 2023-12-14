// Generic
// 기본적으로 선언할 때 타입을 지정을 해주는 데, 사용하다 보면 다양한 타입에 대해서 처리를 해줘야 할 때가 있음
// 함수를 호출하거나 사용할 때 원하는 타입을 넘겨서 지정할 수 있는 방법
function printXY(x: number, y: number): void;
function printXY(x: string, y: string): void;

function printXY(x: number | string, y: number | string) {
  console.log(x, y);
}
printXY(1, 2);
printXY('a', 'b');

// generic
// <T> : 원하는 자료형을 받아오겠다는 뜻 (T는 관례)
function printXYByGeneric<T>(x: T, y: T) {}

printXYByGeneric<string>('a', 'b'); // 함수 호출. string을 넘겨준다
// printXYByGeneric<string>(1, 2); // error. string을 넘겨주어야 한다
printXYByGeneric<number>(1, 2); // 함수 호출. number를 넘겨준다

// 매개변수가 number 배열과 string 배열인 함수
function numArrLength(arr: number[]): number {
  // 함수 표현식을 이용해서 선언
  return arr.length;
}
const strArrLength = (arr: string[]): number => arr.length; // 화살표 함수로 선언

// 만약 객체 배열 외 다른 타입의 배열의 length를 구하는 함수를 만들고 싶다면?
function arrLength<T>(arr: T[]): number {
  return arr.length;
}
arrLength<string>(['a', 'b']);
// arrLength<string>([1, 'b']); // error

// 두 개의 타입을 지정
function exampleGeneric<T, U>(x: T, y: U) {
  console.log(x, y);
}
exampleGeneric<string, number>('a', 1);
// exampleGeneric<string, number>(1, 'a'); // error
let a: string[];
let b: Array<string>; // Array는 interface. interface에서도 generic이 가능하다

// 스마트폰
// Phone<T>라는 제네릭 인터페이스를 정의
interface Phone<T> {
  company: string;
  model: string;
  option: T;
}

// 인터페이스 생성
interface GalaxyOption {
  a: string;
  b: number;
}

// 객체 생성. Galaxy23 객체는 Phone<GalaxyOption> 타입
const Galaxy23: Phone<GalaxyOption> = {
  company: 'Samsung',
  model: 'Galaxy S23',
  option: {
    a: 'aaaa',
    b: 123,
  },
};

// 인터페이스 생성
interface IphoneOption {
  a: string;
  c: number;
}

// // 객체 생성. iPhone15 객체는 Phone<IphoneOption> 타입
const iPhone15: Phone<IphoneOption> = {
  company: 'Apple',
  model: 'iPhone 15',
  option: {
    a: 'aaaa',
    c: 456,
  },
};
