package _03_array;

import java.util.Scanner;

// 배열 실습
public class ArrayEx {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("5개의 정수를 입력하세요");

        int sum = 0;
        int[] arr = new int[5];

        for (int i = 0; i < 5; i ++) {
            arr[i] = sc.nextInt();
            sum += arr[i];
        }

        double average = (double) sum / arr.length;
        System.out.println("배열의 평균은 " + average + "입니다");
    }
}
