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

// void: 함수 자체의 return값이 없을 때 사용
const hello = (): void => {
  console.log('hello');
  // return 'hello'; // error
};

// 함수 오버로딩
