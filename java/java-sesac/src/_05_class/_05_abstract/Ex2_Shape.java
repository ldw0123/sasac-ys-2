package _05_class._05_abstract;

// 추상 클래스 실습 2
public abstract class Ex2_Shape {

    // 필드
    private String color; // 도형 색상
    private String type; // 도형 종류 (원, 사각형 등)

    // 생성자
    public Ex2_Shape(String color, String type) {
        this.color = color;
        this.type = type;
    }

    // 추상 메서드
    // 도형 넓이 계산
    public abstract double calculateArea();

    // 일반 메서드
    // 색상을 반환
    public String getColor() {
        return color;
    }
    // 도형의 종류를 반환
    public String getType() {
        return type;
    }
}
