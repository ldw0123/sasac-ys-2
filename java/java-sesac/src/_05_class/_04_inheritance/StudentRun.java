package _05_class11._04_inheritance;

// Student 클래스 실행
public class StudentRun {
    public static void main(String[] args) {
        Student std1 = new Student("김새싹", 20);
        
        // Case 1. 부모, 자식 클래스의 필드가 public 인 경우
        // Person(부모) 클래스로부터 상속받은 필드 값 읽기
//        System.out.print(std1.name + ", "); // 김새싹
//        System.out.println(std1.age + "세"); // 20
//
//        // 자식 클래스 필드 값 읽기
//        System.out.println(std1.campus); // null (setter 실행 x)
//
//        // Person 으로부터 상속받은 메서드 호출
//        std1.say(); // 안녕
//        std1.eat("바나나"); // 바나나를(을) 먹고 있다
//
//        // Student 메서드 호출
//        std1.setCampus("새싹 용산");
//        System.out.println(std1.campus);

        ////////////////////////////////////////

        // Case 2. 부모, 자식 클래스의 필드가 private 인 경우
        // Person 으로부터 상속받은 필드 읽기
        System.out.println(std1.getName());
        System.out.println(std1.getAge());

        // Student 필드 읽기
        System.out.println(std1.getCampus());

        // Person 으로부터 상속 받은 메서드 호출
        std1.say(); // public 메서드

        // Student 메서드 호출
        std1.setCampus("새싹 용산");
        System.out.println(std1.getCampus());
    }
}
