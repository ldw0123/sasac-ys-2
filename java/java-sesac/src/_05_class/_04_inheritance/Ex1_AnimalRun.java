package _05_class._04_inheritance;

// AnimalRunEx 클래스는 AnimalEx 클래스를 실행시킴
public class Ex1_AnimalRun {
    
    public static void main(String[] args) {
        // Cat 객체
        Ex1_Cat Cat = new Ex1_Cat("미야우", 3);

        // Dog 객체
        Ex1_Dog Dog = new Ex1_Dog("코코", 6);

        // Cat, Dog 객체의 속성 및 메서드 확인
        System.out.println("종: " + Cat.getSpecies());
        System.out.println("이름: " + Cat.getName());
        System.out.println("나이: " + Cat.getAge());
        System.out.print("울음소리: ");
        Cat.makeSound(); // Cat 객체의 makeSound 메서드 호출
        System.out.println("======================");

        System.out.println("종: " + Dog.getSpecies());
        System.out.println("이름: " + Dog.getName());
        System.out.println("나이: " + Dog.getAge());
        System.out.print("울음소리: ");
        Dog.makeSound(); // Dog 객체의 makeSound 메서드 호출
    }
}
