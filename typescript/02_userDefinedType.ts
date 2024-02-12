// 사용자 정의 타입(user-defined type)

// or
// gender 타입 변수 선언
type gender = 'men' | 'women';
// const lily: gender = 'abcd'; // X
const lily: gender = 'women'; // O

// [상품명, 가격]
type productInfo = [string, number];
const cola: productInfo = ['cola', 2500];

// 객체에 대한 타입을 지정할 경우
// interface: 객체의 타입을 정의하는 키워드
// interface는 클래스나 객체가 특정 구조를 따르도록 강제하는 역할을 한다. 객체의 속성과 함수(메서드)의 시그니처(입력 매개변수와 반환 타입)를 정의할 수 있다. 클래스가 특정 메서드를 반드시 구현하도록 강제하는데도 사용될 수 있다
interface productInfo2 {
  // productInfo2 타입의 interface
  productName: string;
  price: number;
}

const cider: productInfo2 = { productName: 'cider', price: 2500 };
// const cider: productInfo2 = { productName: 'cider', price: 2500, sale: 10 }; // sale 때문에 오류

type productInfo3 = {
  productName: string;
  price: number;
  sale?: number; // ? : 선택적 속성 (Optional Properties). sale은 있어도 되고 없어도 된다
};
const beer: productInfo3 = { productName: 'cider', price: 2500, sale: 10 };
console.log(beer.sale); // 10

// 객체 안의 객체
interface Seller {
  name: string;
}

type productInfo4 = {
  productName: string;
  price: number;
  sale?: object;
  seller?: Seller;
};
const soju: productInfo4 = {
  productName: 'soju',
  price: 2000,
  seller: { name: 'lily' },
};
// console.log(soju.seller.name); // 에러
// soju.seller: seller는 선택적 속성(? 키워드)이기 때문에 undefined가 될 수 있다
// 오류 메시지: "undefined에는 ~~~ 함수 또는 속성이 없습니다."

// 옵셔널 체이닝 (Optional Chaining)
// seller가 null 또는 undefined일 경우 undefined를 반환하고, 그렇지 않을 경우 name 속성에 접근한다
console.log(soju.seller?.name); // lily

// 상속
interface Person {
  name: string;
  age: number;
}

interface Student extends Person {
  studentID: string;
  eat: () => void; // 함수의 자료형 정의. 매개변수와 반환값 없음
}

const person: Person = { name: 'lily', age: 88 };
const stu: Student = {
  name: 'lily',
  age: 88,
  studentID: '12345678',
  eat: () => console.log('밥을 먹는다'), // 매개변수와 반환값이 없는 void 타입의 함수
};
