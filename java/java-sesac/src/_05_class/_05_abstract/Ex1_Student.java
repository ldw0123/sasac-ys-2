package _05_class._05_abstract;

// 추상 클래스 실습 1
public abstract class Ex1_Student {
    // 필드
    String name; // 이름
    String school; // 학교
    int age; // 나이
    int number; // 학번

    // getter
    public String getName() {
        return name;
    }

    public String getSchool() {
        return school;
    }

    public int getAge() {
        return age;
    }

    public int getNumber() {
        return number;
    }
    
    // 생성자
    public Ex1_Student(String name, String school, int age, int number) {
        this.name = name;
        this.school = school;
        this.age = age;
        this.number = number;
    }

    // 추상 메서드
    abstract void todo();
}
