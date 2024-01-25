package _05_class._08_generic;

// 제한된 타입 파라미터 (bounded type parameter)

// 참고. Number 클래스
// Java 의 모든 숫자 형식의 부모 클래스

import _02_control_statement.MethodOverloading;

// 제네릭 제한
// Number 를 상속한 클래스만 허용한다
class Box<T extends Number> {
    private T item;
    public void setItem(T item) {
        this.item = item;
    }
}

interface Movable{
    void move();
}

class Car implements Movable {
    @Override
    public void move() {
        System.out.println("자동차 출발!");
    }
}

class Container<T extends Movable> {
    private T item;

    // 생성자
    public Container(T item) {
        this.item = item;
    }

    public void makeItMove() {
        item.move();

    }
}

public class Generic2 {
    public static void main(String[] args) {
        // case 1
        // Box<String> stringBox = new Box<String>(); // String 타입은 에러!
        Box<Double> doubleBox = new Box<Double>(); // Number 클래스의 자식 클래스인 Double 타입은 정상 작동

        // case 2
        Container<Car> carContainer = new Container<>(new Car());
    }
}
