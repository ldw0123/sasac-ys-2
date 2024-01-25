package _05_class._04_inheritance;

public class Ex1_Animal {
    private String species; // 종
    private String name; // 이름
    private int age; // 나이

    // getter: private 필드의 값을 외부로 반환하는 메서드
    // setter: private 필드에 값을 설정하는 메서드
    // 초기화는 다른 클래스의 생성자에서 하기 때문에 getter 만 생성
    public String getSpecies() {
        return species;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public Ex1_Animal(String species, String name, int age) {
        this.species = species;
        this.name = name;
        this.age = age;
    }

    public void makeSound() {
        System.out.println("동물은 소리를 낸다");
    }

}
