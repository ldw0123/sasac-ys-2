package _05_class._01_class;

import java.util.Scanner;

// 클래스 실습
// Rectangle 클래스 (사각형의 넓이를 구하는 클래스)
public class RectangleEx1 {
    // 필드
    public int width;
    public int height;

    // 생성자
    public RectangleEx1(int width, int height) {
        // 지역변수랑 필드 변수명이 동일하기 때문에 this 사용해서 필드 값에 접근
        this.width = width;
        this.height = height;
    }

    // 사각형의 넓이를 반환하는 메서드
    public int area() {
        return width * height;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("사각형의 가로와 세로 길이를 띄어쓰기를 이용하여 입력해주세요");
        int width = sc.nextInt();
        int height = sc.nextInt();

        // 입력 받은 값으로 Rectangle 객체를 생성
        RectangleEx1 rectangle = new RectangleEx1(width, height);
        System.out.println("사각형의 넓이 : " + rectangle.area());

        sc.close();
    }
}
