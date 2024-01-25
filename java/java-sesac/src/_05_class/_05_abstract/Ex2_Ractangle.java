package _05_class._05_abstract;

public class Ex2_Ractangle extends Ex2_Shape{
    private double width; // 가로
    private double height; // 세로

    // 생성자: 색상과 가로, 세로를 초기화
    public Ex2_Ractangle(String color, double width, double height) {
        // 부모 클래스의 생성자 호출하여 초기화
        super(color, "Rectangle");
        this.width = width;
        this.height = height;
    }

    // 사각형의 넓이를 계산하는 메서드를 오버라이딩
    @Override
    public double calculateArea() {
        return width * height;
    }

}
