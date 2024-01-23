package _05_class._03_final;

import java.util.Scanner;

public class FinalEx {
    private final int radius; // 반지름
    static final double PI = Math.PI; // 원주율

    // 생성자
    public FinalEx(int radius) {
        // 생성자에서 변수 초기화
        this.radius = radius;
    }

    // 원의 넓이를 계산하는 메서드
        public double calculateArea() {
        return radius * radius * PI;
    }


    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("원의 반지름을 입력하세요: ");
        int inputRadius = sc.nextInt();

        FinalEx circle = new FinalEx(inputRadius);

        System.out.println("원의 반지름: " + inputRadius);
        System.out.printf("원의 넓이: %.2f", circle.calculateArea());

        sc.close();
    }
}
