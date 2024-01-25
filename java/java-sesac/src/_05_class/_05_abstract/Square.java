package _05_class._05_abstract;

public class Square extends Shape {
    public Square(String color) {
        super(color);
    }

    // 추상 메서드 구현
    void draw() {
        System.out.println("사각형 그리기!");
    }
}
