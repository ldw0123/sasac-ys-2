package _05_class._05_abstract;

public class Ex2_Circle extends Ex2_Shape{
    private double radius; // 원의 반지름

    // 생성자: 색상과 반지름을 초기화
    public Ex2_Circle(String color, double radius) {
        // 부모 클래스의 생성자를 호출하여 초기화
        super(color, "Circle");
        this.radius = radius;
    }

    // 원의 넓이를 계산하는 메서드를 오버라이딩
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
}
