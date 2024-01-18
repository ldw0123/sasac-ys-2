package _02_control_statement;

import java.util.Scanner;

// 메서드 실습
// 두 개의 매개변수를 입력 받아 사칙연산한 값을 출력하는 메서드 만들기
public class MethodEx {
    public void calc(double x, double y) {
        System.out.printf("덧셈 결과: %.1f", x + y).println();
        System.out.printf("뺄셈 결과: %.1f", x - y).println();
        System.out.printf("나눗셈 결과: %f", x / y).println();
        System.out.printf("곱셈 결과: %.1f", x * y).println();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        MethodEx mtd = new MethodEx();

        System.out.println("숫자 두 개를 입력해주세요 >> ");
        double n1 = sc.nextDouble();
        double n2 = sc.nextDouble();

        mtd.calc(n1, n2);
        sc.close();
    }
}
