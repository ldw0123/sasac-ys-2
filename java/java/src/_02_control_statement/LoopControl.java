package _02_control_statement;

// 반복문
public class LoopControl {
    public static void main(String[] args) {
        // 기본 for 문
        for (int i = 1; i <= 10; i++) {
            System.out.println(i);
        }

        // while 문
        // - 조건식이 참일 동안 while 블럭 실행
        System.out.println("====================");
        int i = 1;
        while (i <= 10) {
            System.out.println(i);
            i++;
        }

        // do-while 문
        // - 적어도 한 번은 수행되는 반복문
        // - while 문과 다르게 조건식이 뒤에 배치
        System.out.println("====================");
        int j = 1;
        do {
            System.out.println(j);
            j++;
        }
        while(j <= 10);

        ///////////////////////////////

        // for ~ each 문
        // collection type 데이터에서 데이터가 존재하는 개수만큼 반복 실행
        // - collection type: 데이터를 저장하고 관리하는 자료구조를 제공하는 클래스 모음
        // ex) List, Set, Map, Stack, Vector...
        System.out.println("====================");
        String[] arrA = {"A", "B", "C"}; // String 배열
        for (String b : arrA) { // a라는 변수에 배열 array를 담는다
            System.out.println("a = " + b);
        }

    }
}
