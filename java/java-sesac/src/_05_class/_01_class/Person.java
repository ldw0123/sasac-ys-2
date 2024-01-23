package _05_class._01_class;

// getter & setter
// 멤버 변수에 접근 제어를 추가하고 데이터 캡슐화를 위해 사용된다
// getter: 멤버 변수의 값을 반환하는 메서드. 일반적으로 get으로 시작
// setter: 멤버 변수의 값을 설정하는 메서드. 일반적으로 set으로 시작. 매개 변수를 통해 전달된 값을 멤버 변수에 할당한다
public class Person {
    // 필드 (private)
    private int age;
    private String name;

    // getter
    // getName() 메서드는 이름 멤버 변수의 값을 반환
    public String getName() {
        return name;
    }

    // setter
    // setName(String name) 메서드는 이름 멤버 변수에 전달된 값을 설정
    public void setName(String name) {
        this.name = name;
    }

    // getter
    public int getAge() {
        return age;
    }

    // setter
    public void setAge(int age) {
        this.age = age;
    }

    public static void main(String[] args) {
        Person codee = new Person();
        codee.age = 10; // 권장 X
        codee.setName("codee"); // 권장 O

        System.out.println(codee.age); // 권장 X
        System.out.println(codee.getAge()); // 권장 O

    }
}