package _05_class._06_interface;

// Vehicle 클래스 상속
public class Ex2_car extends Ex2_Vehicle{

    // 생성자
    public Ex2_car(String name, int maxSpeed) {
        // 부모 생성자 호출
        super(name, maxSpeed);
    }

    // move 메서드 구현
    @Override
    public void move() {
        System.out.println(getName() + "이(가) 도로를 따라 이동 중");
    }

}
