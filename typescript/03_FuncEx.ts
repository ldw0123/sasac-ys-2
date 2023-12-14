// 실습 1
// 두 개의 수를 매개 변수로 받고 합을 console.log 로 출력하는 함수 sum1 만들기
// sum1(5, 11); // 테스트는 이렇게 하기!

let sum3 = (a: number, b: number) => {
  return a + b;
};
console.log(sum3(5, 11)); // 16

// 실습 2
// 매개 변수로 여러 개의 수를 받고 전달된 값을 모두 더하는 함수 sum2
// 모두 합산한 값을 "return" 합니다.
// Hint: 전개 연산자 이용하기

// 테스트는 이렇게!
// console.log(sum2(1, 2, 3, 4, 10)); // 20

// for...of : 배열의 각 요소를 순회
// for...in : 객체의 속성을 순회
let sum4 = (...nums: number[]): number => {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum;
};

console.log(sum4(1, 2, 3, 4, 10)); // 20

// reduce():  빈 요소를 제외하고 배열 내에 존재하는 각 요소에 대해 콜백함수를 한 번씩 실행한다
let sum5 = (...nums: number[]): number => {
  return nums.reduce((a, b) => a + b, 0); // 초기값 0
};

console.log(sum4(1, 2, 3, 4, 10)); // 20
