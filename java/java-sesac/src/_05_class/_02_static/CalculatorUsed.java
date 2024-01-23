package _05_class._02_static;

// Calculator 메서드 사용하는 클래스
// static 멤버로 접근
public class CalculatorUsed {
    public static void main(String[] args) {
        int num1 = 10;
        int num2 = 5;

        // static 멤버 접근하기
        // 클래스이름.static 멤버(변수, 메서드)
        double circleArea = num1 * num1 * Calculator.pi;
        int plusResult = Calculator.plus(num1, num2);
        int minusResult = Calculator.minus(num1, num2);

        System.out.println("원의 넓이: " + circleArea);
        System.out.println("더하기 결과: " + plusResult);
        System.out.println("빼기 결과: " + minusResult);
        System.out.println();

        /////////////////////////////////////////////

        // 객체는 2개
        Calculator c1 = new Calculator();
        Calculator c2 = new Calculator();

        // 인스턴스로 static멤버 접근
        System.out.println("c1.count: " + c1.count);
        System.out.println("c2.count: " +c2.count);
        
        // 위아래 동일

        // 클래스(static)로 접근
        System.out.println("Calculator.count: " + Calculator.count);
    }
}
