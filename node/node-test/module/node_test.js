// Call Stack : LIFO(후입선출) 구조

function first() {
  second()
  console.log(1)
  return
}
function second() {
  console.log(2)
  return
}
first()

// 콜백함수 : 함수의 인자로 함수를 넘길 때, 인자로 넘기는 그 함수
function run() {
  console.log('3초 뒤 실행')
}

console.log('시작')
setTimeout(run, 3000) // 콜백함수로 함수의 이름만 넘기면 됨. 괄호x
console.log('끝')
