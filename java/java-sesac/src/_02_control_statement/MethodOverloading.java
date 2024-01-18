package _02_control_statement;

// 메서드 오버로딩
// - 하나의 클래스에서 동일한 이름의 메서드 여러 개 정의
// - 즉, 이름이 같고 매개변수 타입, 개수, 순서가 다름
// - 동작이 유사할 때 사용하면 편리

public class MethodOverloading {
    public static void main(String[] args) {
        // 1. 객체 생성
        MethodOverloading ol = new MethodOverloading();

        // 2. 객체의 메서드 사용
        System.out.println(ol.add(1, 2)); // int
        System.out.println(ol.add(1.1, 2.2)); // double
        System.out.println(ol.add(1, 2, 3)); // int
        // 부동 소수점의 한계
        System.out.println(ol.add(1.1, 2.2, 3.3)); // double
    }

    public int add(int a, int b) {
        return a + b;
    }

    // 매개변수의 타입이 다름
    public double add(double a, double b) {
        return a + b;
    }

    // 매개변수의 개수가 다름
    public int add(int a, int b, int c) {
        return a + b + c;
    }

    // 매개변수의 타입과 개수가 다름
    public double add(double a, double b, double c) {
        return a + b + c;
    }
}

// 부동 소수점의 한계 ->