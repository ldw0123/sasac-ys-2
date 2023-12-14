// 함수

// JS
// function abc() {
//   console.log(abc);
// }

// 함수 자체의 type -> 함수가 실행되어 결국 return값
// 매개변수와 return 타입(= number)를 선언
function sum1(a: number, b: number): number {
  return a + b;
  // return "hello" // 에러
}
console.log(sum1(1, 3));

// optional 매개변수
const sum2 = (a: number, b?: number): number => {
  // return a + b; // 에러. b가 선택적인 값이기 때문에 undefined일 수 있다
  if (b) return a + b; // b가 있을 경우
  return a; // 그렇지 않으면
};
console.log(sum2(5, 3));

interface Calculator {
  sum: (a: number, b: number) => number;
  sub?: () => void; // 옵셔널 메서드
}

const calc: Calculator = {
  sum: sum1, // sum 메서드로 sum1 함수를 사용
};

// void: 함수 자체의 return값이 없을 때 사용

// 함수 오버로딩: 함수의 이름은 같으나, 형태가 다른 함수(매개변수)
// JS는 오버로딩이 없지만, TS에는 있다
// function 키워드로만 함수 오버로딩을 할 수 있으며, 화살표 함수로는 오버로딩을 할 수 없다
function hello(num: number, num2: number): number; // 함수의 구현부 없이 선언만 함
function hello(str: string, str2: string): string;

// 한번에 구현
// 방식 1
// function hello(param: any) {
//   console.log(param);
//   return param;
// }

// 방식 2
function hello(param: number | string, param2: number | string) {
  console.log(param);
  console.log(param2);
  return param;
}

hello(10, 20); // hello(10, 'hello'); -> 에러
hello('hello', 'world');

// never
function goingOn(): never {
  while (true) {
    console.log('go');
  }
}
