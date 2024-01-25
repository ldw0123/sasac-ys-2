package _05_class._04_inheritance;

// 차량에 대해 클래스화 하기
public class Ex2_Vehicle {

    private String Vehicle; // 차량 종류
    private String brand; // 브랜드
    private String model; // 모델
    private int year; // 연식
    private int passengerCapacity; // 수용 인원

    // getter
    public String getVehicle() {
        return Vehicle;
    }

    public String getBrand() {
        return brand;
    }

    public String getModel() {
        return model;
    }

    public int getYear() {
        return year;
    }

    public int getPassengerCapacity() {
        return passengerCapacity;
    }

}
