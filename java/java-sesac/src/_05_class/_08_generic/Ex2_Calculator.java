package _05_class._08_generic;

// 클래스: Calculator
// 제네릭 타입: T (제한: Number의 하위 클래스)
// 프라이빗 멤버 변수: num1, num2
// 생성자: Calculator(T num1, T num2)
// 더하기 메서드: double add()
// 제네릭 메서드 활용: doubleValue로 숫자를 double로 변환
// 메인 메서드: 정수형과 실수형에 대한 객체 생성 및 결과 출력
public class Ex2_Calculator<T extends Number> {

    private T num1;
    private T num2;

    // 생성자
    public Ex2_Calculator(T num1, T num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    // 숫자 더하기 메서드
    public double add() {
        return num1.doubleValue() + num2.doubleValue();
    }

    public static void main(String[] args) {
        // 정수형 계산기
        Ex2_Calculator<Integer> intCalculator = new Ex2_Calculator<>(5, 10);
        System.out.println("Integer Sum: " + intCalculator.add());

        // 실수형 계산기
        Ex2_Calculator<Double> doubleCalculator = new Ex2_Calculator<>(3.14, 2.5);
        System.out.println("Double Sum: " + doubleCalculator.add());
    }
}
