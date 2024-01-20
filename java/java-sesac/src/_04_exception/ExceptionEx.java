package _04_exception;

import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.Scanner;

// 예외 처리 실습
public class ExceptionEx {
    public static void main(String[] args) {
        // ⭐실습 1
        int[] arr1 = new int[4]; // 크기가 4인 배열

        try {
            for (int i = 0; i < 5; i++) {
                arr1[i] = i + 1;
                System.out.println(arr1[i]);
            }
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("배열 인덱싱 중 에러 발생 >> " + e.toString());
            System.out.println("인덱스가 범위를 벗어났습니다");
        }

        // ⭐실습 2
        Scanner sc = new Scanner(System.in);

        try {
            // 배열 크기 입력
            System.out.print("배열의 크기를 입력하세요 >> ");
            int size = sc.nextInt();

            if (size <= 0) {
                // 부적절한 인자 예외
                // throw new ~ : 에러를 던짐
                throw new IllegalArgumentException("배열 크기는 1 이상이어야 합니다.");
            }

            int sum = 0;
            int[] arr2 = new int[size];
            for (int i = 0; i < arr2.length; i++) {
                arr2[i] = i;
                System.out.println(arr2[i]);
                sum += arr2[i];
            }

            // 산술 연산 예외
            try {
                System.out.println(arr2[1] / arr2[0]);
            } catch (ArithmeticException e) {
                System.out.println("나누기 중 에러 발생 >> " + e.toString());
            }

            double average = (double) sum / size;
            System.out.println("평균은 " + average + "입니다.");

            // 입력 형식(자료형) 예외
        } catch (java.util.InputMismatchException e) {
            System.out.println("잘못된 입력 형식입니다. 정수를 입력하세요.");

        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage()); // 예외 메시지를 가져와서 출력
        } finally {
            // Scanner 닫기
//            sc.close();
        }

        // ⭐실습 3

        try {
            // 배열 크기 입력
            System.out.println("배열의 크기를 입력하세요 >> ");
            int size = sc.nextInt();

            int[] arr3 = new int[size];

            // 배열 요소 입력
            System.out.println("배열의 요소를 " + size + "개 입력하세요 >> ");
            for (int i = 0; i < size; i++) {
                System.out.print("요소 " + (i + 1) + ": ");
                arr3[i] = sc.nextInt();
            }

            // 중복된 요소 찾기
            ArrayList<Integer> duplicates = findDuplicates(arr3);

            // 중복된 요소 출력
            if (duplicates.isEmpty()) {
                System.out.println("중복된 요소가 없습니다.");
            } else {
                System.out.println("중복된 요소: " + duplicates);
//                System.out.println("중복된 숫자 서브 배열: " + );
            }
            // 입력 형식(자료형) 예외
        } catch (InputMismatchException e) {
            System.out.println("잘못된 입력 형식입니다. 정수를 입력하세요.");
        } finally {
            // Scanner 닫기
            sc.close();
        }
    }

    // 중복된 요소 찾는 메소드
    private static ArrayList<Integer> findDuplicates(int[] arr3) {
        ArrayList<Integer> duplicates = new ArrayList<>();

        for (int i = 0; i < arr3.length - 1; i++) {
            for (int j = i + 1; j < arr3.length; j++) {
                // 배열이 1 2 3 4 5 있다고 할 때,
                // 1에 대해서 2, 3, 4, 5 중복 검사 -> i = 0, j = 1 ~ legnth-1
                // 2에 대해서 3, 4, 5 중복 검사
                // 3에 대해서 4, 5
                // 4에 대해서 5

                // contains() 메서드: ArrayList에서 특정 요소가 있는지 확인
                // !duplicates.contains(arr3[i]): duplicates 리스트에 arr3[i] 값이 없다면
                if (arr3[i] == arr3[j] && !duplicates.contains(arr3[i])) {
                    // 중복된 요소 추가
                    duplicates.add(arr3[i]);
                    // -> duplicates : [1]
                }
            }
        }

        return duplicates;
    }
}
