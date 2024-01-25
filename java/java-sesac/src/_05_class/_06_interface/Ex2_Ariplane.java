package _05_class._06_interface;

// Ex2_Vehicle 클래스를 상속받고, Ex2_Flyable 인터페이스를 구현
public class Ex2_Ariplane extends Ex2_Vehicle implements Ex2_Flyable {
    // 생성자
    public Ex2_Ariplane(String name, int maxSpeed) {
        super(name, maxSpeed);
    }

    // move 메서드 구현 (Vehicle 추상 클래스)
    @Override
    public void move() {
        System.out.println(getName() + "이(가) 하늘을 날아가는 중");
    }

    // fly 메서드 구현 (Flyable 인터페이스)
    @Override
    public void fly() {
        System.out.println(getName() + "이(가) 고도 " + getMaxSpeed() + "피트에서 비행 중");
    }
}