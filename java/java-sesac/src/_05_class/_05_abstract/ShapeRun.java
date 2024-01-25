package _05_class._05_abstract;

//  Shape 메서드 실행
public class ShapeRun {

    public static void main(String[] args) {
        // Shape 객체는 new 연산자로 직접 생성할 수 없지만,
        // 자식 클래스인 Circle, Square 에서 new 연산자로 객체 생성이 가능하다!
        
        // 객체 생성
        Circle circle = new Circle("노란색");
        Square square = new Square("다홍색");

        // circle 객체의 메서드 호출
        circle.start();
        circle.draw();
        System.out.println("원 색상은 " + circle.getColor());
        System.out.println("======================");

        // square 객체의 메서드 호출
        square.start();
        square.draw();
        System.out.println("사각형 색상은 " + square.getColor());
    }
}
