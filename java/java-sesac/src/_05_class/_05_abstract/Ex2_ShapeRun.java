package _05_class._05_abstract;

import java.util.ArrayList;

public class Ex2_ShapeRun {

    public static void main(String[] args) {
        // ArrayList 생성
        // <Ex2_Shape> : Ex2_Shape 타입의 객체들을 저장하는 리스트라는 뜻
        // Ex2_Shape 는 클래스의 이름이지만, <Ex2_Shape>는 타입 매개변수로 사용되어 "ArrayList에 저장되는 객체들의 타입"을 지정한다
        ArrayList<Ex2_Shape> shapeList = new ArrayList<>();

        // 객체 생성
        Ex2_Circle circle = new Ex2_Circle("Red", 5.0);
        // 리스트에 추가
        shapeList.add(circle);

        // 객체 생성
        Ex2_Ractangle ractangle = new Ex2_Ractangle("Blue", 4.0, 6.0);
        // 리스트에 추가
        shapeList.add(ractangle);

        // 각 도형의 정보 출력
        for (Ex2_Shape shape : shapeList) {
            System.out.printf("\n==== %s 도형의 정보 ====\n", shape.getType());
            System.out.println("도형의 색상: " + shape.getColor());
            System.out.println("도형의 넓이: " + shape.calculateArea());
        }
    }
}
