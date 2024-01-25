package _05_class._06_interface;

// 추상 클래스
public abstract class Ex2_Vehicle {
    // 필드
    // 멤버 변수 선언
    private String name;
    private int maxSpeed;

    // 생성자
    public Ex2_Vehicle(String name, int maxSpeed) {
        this.name = name;
        this.maxSpeed = maxSpeed;
    }

    // getter
    public String getName() {
        return name;
    }

    public int getMaxSpeed() {
        return maxSpeed;
    }

    // setter
    public void setName(String name) {
        this.name = name;
    }

    public void setMaxSpeed(int maxSpeed) {
        this.maxSpeed = maxSpeed;
    }

    // 추상 메서드
    public abstract void move();
}
