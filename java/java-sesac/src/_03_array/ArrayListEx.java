package _03_array;

import java.util.ArrayList;
import java.util.Scanner;

// ArrayList 실습
public class ArrayListEx {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<String> list = new ArrayList<>();

        while (true) {
            System.out.print("문자를 입력해주세요 >>");
            String input = sc.nextLine(); // 엔터 키를 입력할 때까지의 모든 문자열을 한 번에 읽어들인다

            if (input.equals("exit")) {
                break;
            }

            // ArrayList에 입력받은 문자열 추가
            list.add(input);

        }

        // ArrayList에 있는 값들 출력
        for (String str : list) {
            System.out.println(str);
        }

        // Scanner 닫기
        sc.close();
    }
}
