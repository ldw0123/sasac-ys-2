package _05_class._03_final;

// Const 클래스 이용

// 상수
// - 변하지 않는 값
// - 객체마다 저장할 필요가 없고, 단 한 번만 값이 선언되면 되기 때문에 static이면서 final인 특성을 갖는다
public class ConstUsed {
    public static void main(String[] args) {
        // 상수는 읽기만 가능
        System.out.println(Const.MAX_VALUE);
        System.out.println(Const.GREETING);

        // 값 변경 x
        // Const.GREETING = "Hi"; // 에러!
    }
}
