package _05_class._02_static;

import java.util.ArrayList;
import java.util.Scanner;

// static 실습
// Rectangle 클래스 (사각형의 넓이를 구하는 클래스)
public class RectangleEx4 {
    private int width;
    private int height;

    // static 변수 instanceCount로 인스턴스의 개수를 추적
    // 생성자가 호출되는 시점은 객체(인스턴스)가 만들어질 때
    private static int instanceCount = 0;

    public RectangleEx4(int width) {
        // 지역변수랑 필드 변수명이 동일하기 때문에 this 사용해서 필드 값에 접근
        this.width = width;

        // 객체가 생성될 때마다 인스턴스 개수 증가
        instanceCount++;
    }

    public static int getInstanceCount() {
        return instanceCount;
    }

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int area() {
        return width * height;
    }

    public static void main(String[] args) {
        // Rectangle 객체를 담는 ArrayList 생성
        ArrayList<RectangleEx4> rectangles = new ArrayList<>();

        Scanner scanner = new Scanner(System.in);

        // 사용자로부터 가로와 세로 입력받아 ArrayList 에 Rectangle 인스턴스 차례로 추가
        while (true) {
            System.out.println("가로와 세로 길이를 띄어쓰기 기준으로 입력해주세요: ");
            int width = scanner.nextInt();
            int height = scanner.nextInt();

            if (width == 0 && height == 0) {
                break;
            }

            RectangleEx4 rectangle = new RectangleEx4(width);
            rectangle.setHeight(height); // 세로 길이 설정

            // Arraylist 에 Rectangle 객체 추가
            rectangles.add(rectangle);
        }

        // 입력된 Rectangle 객체들의 정보 출력
        System.out.println("\n입력된 Rectangle 정보:");

        // 반복문을 통해 ArrayList 출력
        for (RectangleEx4 rectangle : rectangles) {
            System.out.println("가로 길이는: " + rectangle.getWidth());
            System.out.println("세로 길이는: " + rectangle.getHeight());
            System.out.println("넓이는: " + rectangle.area());
            System.out.println("============================");
        }
        System.out.println("Rectangle 인스턴스의 개수는: " + RectangleEx4.getInstanceCount());
        scanner.close();
    }
}