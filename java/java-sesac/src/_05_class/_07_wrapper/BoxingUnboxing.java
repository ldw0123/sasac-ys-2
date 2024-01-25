package _05_class._07_wrapper;

// Boxing & Unboxing
public class BoxingUnboxing {
    public static void main(String[] args) {
        // Boxing
        // - 기본 타입의 값을 래퍼(Wrapper) 객체로 만드는 과정
        // - 래퍼 클래스 변수에 값이 대입될 때 발생
        Integer obj1 = 100;
        Double obj2 = 3.14;
        System.out.println(obj1.intValue()); // Integer 객체 내부의 int 값 반환
        System.out.println(obj2.doubleValue()); // Double 객체 내부의 double 값 반환
        System.out.println();

        // Unboxing
        // - 래퍼 객체에서 기본 타입 값을 얻는 과정
        // - 기본 타입 변수에 래퍼 객체가 대입될 때 발생
        int value1 = obj1;
        double value2 = obj2;
        System.out.println(value1);
        System.out.println(value2);
    }
}
