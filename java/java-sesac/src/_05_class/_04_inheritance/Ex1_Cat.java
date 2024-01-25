package _05_class._04_inheritance;

public class Ex1_Cat extends Ex1_Animal {

    // 생성자
    public Ex1_Cat(String name, int age) {
        // super(): 부모클래스의 생성자 호출. 생성자의 첫 줄에 위치해야 한다
        // Animal 클래스의 생성자를 호출하여 초기화
        super("고양이", name, age);
    }

    @Override
    public void makeSound() {
        System.out.println("야오옹ㅇ야야아오ㅇ야옹야옹");
    }
}
