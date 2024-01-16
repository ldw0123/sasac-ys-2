package _02_control_statement;

import java.util.Scanner;

public class Practice {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // 실습 1
        System.out.println("나이를 입력하세요");
        int age = sc.nextInt();
        String who;

        // 방법 1
        who = switch (age) {
            case 1, 2, 3, 4, 5, 6, 7 -> "유아";
            case 8, 9, 10, 11, 12, 13 -> "초등학생";
            case 14, 15, 16 -> "중학생";
            case 17, 18, 19 -> "고등학생";
            default -> "성인";
        };
        System.out.println(who);

        // 방법 2
        if (age > 1 && age <= 7) {
            System.out.println("유아");
        } else if (age >= 8 && age <= 13) {
            System.out.println("초등학생");
        } else if (age >= 14 && age <= 16) {
            System.out.println("중학생");
        } else if (age >= 17 && age <= 19) {
            System.out.println("고등학생");
        } else if (age >= 20) {
            System.out.println("성인");
        }

        ///////////////////////////////////////////

        // 실습 2
        System.out.println("이름을 입력하세요");
        String name = sc.next();
        String gender;

        gender = switch (name) {
            case "홍길동" -> "남자";
            case "성춘향" -> "여자";
            default -> "모르겠어용";
        };
        System.out.println(gender);

        ///////////////////////////////////////////
        
        // 실습 3
        System.out.println("숫자를 입력하세요");
        int num = sc.nextInt();
        int i = 1;
        while (i <= num) {
            System.out.println(i);
            i++;
        }
    }
}
