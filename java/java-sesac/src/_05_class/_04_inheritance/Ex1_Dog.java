package _05_class11._04_inheritance;

public class Ex1_Dog extends Ex1_Animal {

    public Ex1_Dog(String name, int age) {
        super("강아지", name, age);
    }


    @Override
    public void makeSound() {
        System.out.println("멍ㅁ엉멍엄멍ㅇ멍!!!");
    }

}
