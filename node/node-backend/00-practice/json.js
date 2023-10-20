// JSON : JavScript Object Notation

// 1. Object -> JSON 객체를 JSON으로 변환
// stringify(obj) : 문자열 타입의 json으로 변환
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json, '\n'); // ["apple","banana"] 쌍따옴표로 출력 (JSON의 규격사항)

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  // 화살표 함수는 object에 있는 데이터가 아니므로 변환 x
  jump: () => {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']); // 원하는 property를 변환
console.log(json, '\n');

// 콜백함수를 이용하여 원하는 property를 변환
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'asahi' : value; // key가 name일 경우 asahi로 변환하고, 아닐 경우 원래의 value값
});
console.log(json, '\n');

// 2. JSON -> Object
// parse (json) : 변환하고 싶은 json을 전달
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
// rabbit.jump(); // 에러! json에 포함되지 않았기 때문에 object로 변환 불가

console.log('rabbit.birthDate.getDate() : ' + rabbit.birthDate.getDate(), '\n'); // rabbit 안에 있는 birthDate는 object
// console.log(obj.birthDate.getDate()); // 에러! obj안에 있는 birthDate는 문자열이기 때문에

const obj2 = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  // key가 birthDate면 새로운 새로운 Date라는 object를 만든다
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj2);

console.log('rabbit.birthDate.getDate() : ' + rabbit.birthDate.getDate());
console.log('obj2.birthDate.getDate() : ' + obj2.birthDate.getDate());
