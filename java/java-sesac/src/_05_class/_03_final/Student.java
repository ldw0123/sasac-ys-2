package _05_class._03_final;

public class Student {
    // final 필드

    final String campus = "용산"; // 1. 필드 선언 시 초기화
    final String sid; // 2. 생성자에서 초기화

    public Student(String sid) {
        this.sid = sid; // sid를 매개변수로 받아 sid가 "s001"로 초기화된다
    }

    public static void main(String[] args) {
        // 생성자를 호출하여 std1 객체를 생성
        // 생성자는 매개변수로 "s001"을 전달받아 sid를 초기화한다
        Student std1 = new Student("s001");

        // std1.campus : std1 객체의 campus 필드에 접근
        System.out.println(std1.campus); // 용산
        System.out.println(std1.sid); // s001
        
        // final 필드 값 변경 불가능
        // std1.campus = "영등포"; // 에러
    }
}
