package _05_class._05_abstract;

public class Ex1_Kim extends Ex1_Student {
    // 생성자
    public Ex1_Kim(String name, String school, int age, int number) {
        super(name, school, age, number);
    }

    // 추상 메서드 구현
    @Override
    void todo() {
        System.out.println("점심에 축구하실??");
    }
}
