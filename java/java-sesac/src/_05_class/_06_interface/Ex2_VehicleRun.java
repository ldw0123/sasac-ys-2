package _05_class._06_interface;

public class Ex2_VehicleRun {

    public static void main(String[] args) {
        // Vehicle 배열 생성
        Ex2_Vehicle[] vehicles = new Ex2_Vehicle[2];

        // Car 객체 생성 및 배열에 저장
        Ex2_car car = new Ex2_car("자동차", 120);
        vehicles[0] = car;

        // Airplane 객체 생성 및 배열에 저장
        Ex2_Ariplane airplane = new Ex2_Ariplane("비행기", 1200);
        vehicles[1] = airplane;

        // 배열을 순회하면서 move() 메서드 호출
        for (Ex2_Vehicle vehicle : vehicles) {
            System.out.printf("\n==== %s 정보 ====\n", vehicle.getName());
            vehicle.move();
            
            // 추가
            // 업캐스팅: 하위 -> 상위 클래스로 변환. () 명시
            // 다운캐스팅: 상위 -> 하위 클래스로 변환. () 생략 가능
            
            // instanceof : 각각의 타입을 알고 싶을 때 검사할 수 있다
            System.out.println(vehicle instanceof Ex2_Flyable);
            // Flyable 인터페이스를 구현한 경우 fly() 메서드도 호출
            if (vehicle instanceof Ex2_Flyable) {
                ((Ex2_Flyable) vehicle).fly(); // 업캐스팅. Ex2_Flyable 타입으로 형변환(casting)을 해서 fly 실행
            }
        }
    }
}
