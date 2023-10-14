// ⭐ 상속

class House {
  // 생성자 함수, 객체의 속성(내부에서 사용할 변수) 부여
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  // 객체 메서드
  age() {
    console.log(
      `${this.name}은 건축된지 ${
        new Date().getFullYear() - this.year
      }년 됐습니다.`
    );
  }
}

const home = new House('와르르맨션', '1958');
home.age();

class Apartment extends House {
  constructor(name, year, floor) {
    // super() : 조상 클래스의 생성자를 호출
    // 상속받은 멤버와 자신의 멤버와 중복되어서 이름이 같을 때는 super를 붙여서 구별함
    // 부모(House)의 생성자 호출
    super(name, year);
    this.floor = floor;
  }

  // 오버라이딩: 부모의 메소드를 자식이 다시 정의하는 것
  // 함수 이름, 매개변수가 동일해야 함
  age() {
    // 부모의 age() 메서드 사용
    super.age();
    console.log(
      `입주는 ${this.year + 1}부터 시작되었고, ${this.floor}층 입니다.`
    );
  }
}

const apart = new Apartment('롯데 시그니엘', 2017, 123);
apart.age();
console.log();

// ⭐ 오버라이딩 vs 오버로딩
// js에는 오버로딩 개념이 없다!
// 오버로딩이란 똑같은 함수의 이름으로 여러개의 함수를 선언하는 것
// 조건: 메서드 이름이 같고 매개변수가 달라야 한다
// 매개변수가 달라 서로 구분이 됨
function test(a, b) {
  console.log(`a: ${b}, b: ${b}`);
}

function test(a, b = 0, c) {
  console.log(`a: ${b}, b: ${b}, c: ${c}`);
}

// js는 마지막 함수만 호출하기 때문에 js에는 오버로딩이 없다!
test(2, 5);
console.log();
