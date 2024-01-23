package _05_class._03_final;

// final 변수
// - final 키워드가 지정된 변수는 한 번 초기화하면 값 변경을 할 수 없다
public class FinalVariable {

    public static void main(String[] args) {
        // final 변수 선언 및 초기화
        final int finalNumber = 10;

        // 초기화된 값을 변경하려고 하면 컴파일 오류 발생!
        // finalNumber = 20; // 에러 발생

        // 읽기 전용
        System.out.println("Final Number: " + finalNumber);
    }


}
