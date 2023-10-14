// ⭐ 클래스

const cat = {
  name: '나비',
  age: 2,
  mew: function () {
    console.log('야옹');
  },
};

const cat2 = {
  name: '장화',
  age: 80, // 여든
  mew: function () {
    console.log('미아우');
  },
};

const cat3 = {
  name: '코코',
  age: 4,
  mew: function () {
    console.log('냐옹');
  },
};

// PascalCase 규칙을 이용해서 식별자 생성
// camelCase에서 첫 글자를 대문자로
class Cat {
  // 생성자: 메서드의 일종. 객체를 생성함
  // (메서드 중에서) Cat 클래스를 이용해서 객체를 만드는 순간 호출되는 메서드
  constructor(name, age) {
    // 객체를 만들고, 그 객체가 this에 담긴다. this는 자기 자신을 의미. this.name과 name은 다름!
    this.name = name;
    this.age = age;
  }

  // 메서드
  mew() {
    console.log('야옹');
  }

  // 고양이의 정보를 콘솔로 찍는 메서드
  info() {
    console.log(`이름은 ${this.name}, 나이는 ${this.age}살`);
  }
}

const cat4 = new Cat('나비', 2); // 새 객체를 생성
const cat5 = new Cat('장화', 80);
console.log(cat4.name, cat5.name);
cat4.mew();
cat4.info();
