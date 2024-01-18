package _03_array;

import java.util.ArrayList;
import java.util.Arrays;

// ArrayList

// Collection Framework
// - 객체를 효율적으로 추가, 삭제, 검색할 수 있도록 관련 인터페이스 & 클래스를 java.util에 포함시켜 놓는다

// List
// - ArrayList

// Set
// - HashSet
// - TreeSet

// Map
// - HashMap
// - Hashtable
// - TreeMap

// ArrayList 클래스
// - List 컬렉션에서 가장 많이 사용하는 컬렉션
// - 표준 배열보다 조금 느릴 수 있으나, 배열에서 많은 조작이 필요한 경우에 유용
// - 크기를 미리 지정하지 않아도 된다 (동적 할당. 일반 배열과의 차이점)
// - List 컬렉션은 객체 자체를 저장하는 것이 아니라, 객체 번지를 저장 -> 동일한 객체를 중복 저장할 수도 있는데, 이는 동일한 번지수가 저장되었다는 의미. null 도 가능

public class ArrayList_ {
    public static void main(String[] args) {
        // 1. ArrayList 생성 (정수형)
        ArrayList<Integer> numbers = new ArrayList<>();

        // 2. 요소 추가
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        numbers.add(40);
        numbers.add(50);

        // 3. 요소 접근
        System.out.println("첫 번째 요소: " + numbers.get(0)); // 10

        // 4. 요소 수정
        numbers.set(1, 77); // 1번 인덱스를 77로 수정
        System.out.println("numbers: " + numbers); // [10, 77, 30, 40, 50]

        // 5. 요소 삽입 (지정된 위치)
        numbers.add(1, 7); // 1번 인덱스에 7을 삽입
        System.out.println("numbers: " + numbers); // [10, 7, 77, 30, 40, 50]

        // 6. ArrayList 끼리 연결
        System.out.println(Arrays.asList(99, 33, 55)); // [99, 33, 55]
        numbers.addAll(Arrays.asList(99, 33, 55));
        System.out.println("numbers: " + numbers); // [10, 7, 77, 30, 40, 50, 99, 33, 55]

        // 7. 요소 위치 찾기
        System.out.println(numbers.indexOf(10)); // 0
        System.out.println(numbers.indexOf(30)); // 3
        System.out.println(numbers.indexOf(99)); // 6

        // 8. 요소 삭제
        numbers.remove(2); // 2번 인덱스 삭제
        System.out.println("numbers: " + numbers); // [10, 7, 30, 40, 50, 99, 33, 55]

        // 9. 리스트 크기 확인
        System.out.println("리스트 크기: " + numbers.size()); // 8

        // 10. 모든 요소 출력
        // for-each 문으로 하나씩 출력
        for (Integer n : numbers) {
            System.out.print(n + " ");
        } // 10 7 30 40 50 99 33 55
        System.out.println();

        // 11. 모든 요소 삭제
        numbers.clear();
        System.out.println(numbers + "\n"); // []

        ///////////////////////////////////////////
        
        // Student 타입으로 ArrayList 생성
        ArrayList<Student> students = new ArrayList<>();

        students.add(new Student("John", 10));

        // 위와 동일
        Student std1 = new Student("Jennie", 14);
        students.add(std1);

        students.add(new Student("Rose", 18));
        students.add(new Student("Lily", 13));
        students.add(new Student("Lisa", 21));

        System.out.println("students: " + students);
        System.out.println("학생 수: " + students.size());

        // 인덱스로 접근
        Student std = students.get(0); // 0번 학생 확인
        System.out.println(std.getName() + "학생의 나이는 " + std.getAge() + "살 입니다");

        // 반복문 이용
        System.out.println("=== 학생 명단 ===");
        for (Student std2 : students) {
            System.out.println(std2.getName() + " (" + std2.getAge() + "살)");
        }

        // System.out.println(Arrays.toString(array 배열));
        System.out.println(Arrays.toString(numbers.toArray()));

    }
}

class Student {
    private String name;
    private int age;

    // 생성자
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }
}