package _02_control_statement;

import java.util.Scanner;

// 메서드 오버로딩 실습
public class MethodOverloadingEx {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        MethodOverloadingEx area = new MethodOverloadingEx();

        // 원의 넓이
        System.out.println("반지름을 입력하세요");
        int r = sc.nextInt();
        System.out.println("반지름이 " + r + "인 원의 넓이: " + area.areaMethod(r));

        // 직사각형의 넓이
        System.out.println("가로와 세로의 길이를 입력하세요");
        int ractA = sc.nextInt();
        int ractB = sc.nextInt();
        System.out.println("가로 " + ractA + ", 세로 " +ractB + "인 직사각형의 넓이: " + area.areaMethod(ractA, ractB));

        // 삼각형의 넓이
        System.out.println("삼각형의 밑변과 높이를 입력하세요");
        int triA = sc.nextInt();
        int triB = sc.nextInt();
        System.out.println("밑변 " + triA + ", 높이 " +triB + "인 삼각형의 넓이: " + area.areaMethod(triA, triB));
    }

    // 원의 넓이를 계산하는 메서드
    public double areaMethod(double a) {
        return a * a * Math.PI;
    }

    // 직사각형의 넓이를 계산하는 메서드
    public int areaMethod(int a, int b) {
        return a * b;
    }

    // 삼각형의 넓이를 계산하는 메서드
    public double areaMethod(int a, double b) {
        return a * b / 2;
    }
}
