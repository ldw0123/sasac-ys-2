package _05_class._05_abstract;

public class Ex1_Baek extends Ex1_Student{
    // 생성자
    public Ex1_Baek(String name, String school, int age, int number) {
        super(name, school, age, number);
    }

    // 추상 메서드 구현
    @Override
    void todo() {
        System.out.println("오늘 점심은 무조건 1등으로 먹어야 한다");
    }
}
