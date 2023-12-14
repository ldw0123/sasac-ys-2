// 실습 1
// 제네릭을 이용해서 함수 arrElement 선언하기
// 배열과 인덱스 번호를 매개변수로 받고, Arr[index]에 대한 요소를 리턴하는 함수 만들기
// 함수의 리턴 타입까지 작성하기
// 실행 예시) console.log(arrElement<string>(["a"], 0));

// arrElement 함수는 제네릭 T와 숫자 인덱스를 매개변수로 받아, 해당 인덱스의 배열 요소를 반환한다
function arrElement<T>(arr: T[], index: number) {
  return arr[index];
}
console.log(arrElement<string>(['a'], 0)); // a
// <string>은 arrElement 함수에 전달되는 배열의 요소 타입
// 즉, 이 경우 arrElement 함수는 문자열 요소를 가지는 배열을 인자로 받는다
// 반면에 0은 index 매개변수로 전달되며, 이는 배열의 인덱스를 나타내는 숫자이다

// 실습 2
// 첫번째 인자로 들어간 배열의 길이보다 큰 index 수(두번째 인자)가 전달된다면 return false 시키기!
// console.log(arrElement<string>(['a'], 1)); // false
function arrElement2<T>(arr: T[], index: number) {
  if (arr.length <= index) return false;
  return arr[index];
}
console.log(arrElement2<string>(['a', 'b', 'c'], 3)); // false
// console.log(arrElement<string>(['a'], 1));
