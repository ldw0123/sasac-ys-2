//Shape 클래스 만들기
class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // 사각형의 넓이를 구하는 메서드
  getArea() {
    return this.width * this.height;
  }
}

// 클래스 상속
class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  // 직사각형의 대각선 길이를 구하는 메서드
  getArea() {
    super.getArea();
    return Math.sqrt(this.width ** 2 + this.height ** 2);
  }
}

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}

class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius; // 반지름
  }

  getArea() {
    return 3.14 * this.radius ** 2;
  }
}

let rec1 = new Shape(3, 4);
console.log(`사각형의 넓이는 ${rec1.getArea()}입니다.`); // 12

let rec2 = new Rectangle(3, 4);
console.log(`직사각형의 대각선 길이는 ${rec2.getArea()}입니다.`); // 5

let tri = new Triangle(4, 5);
console.log(`삼각형의 반지름은 ${tri.getArea()}입니다.`); // 10

let cir = new Circle(3, 4, 5);
console.log(`원의 넓이는 ${cir.getArea()}입니다.`); // 78.5
