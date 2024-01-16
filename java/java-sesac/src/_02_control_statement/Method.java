package _02_control_statement;

// 메서드
// - 객체가 갖는 기능 (동작)

// 메서드 정의

/*
 *  접근제한자 리턴타입 메서드_이름 (인자 1, 인자 2, ...) {
 *    // 메서드 행위
 *    return 반환값;
 *  }
 * */
public class Method {
    public static void main(String[] args) {
        int[] numbers = {10, 20};
        int[] numbers2 = {10, 20, 30, 40};

        hello();
        System.out.println(sum1(10, 20));
        System.out.println(sum2(5, 8));

        // 값 전달
        System.out.println(mul1(10, 20));

        // 참조 전달
        System.out.println(mul2(numbers));
        System.out.println(mul2(new int[]{10, 30})); // 배열을 생성하고 바로 값 넣기
        System.out.println(mul2(numbers2));
   }

    // 반환값이 없는 메서드
    public static void hello() {
        System.out.println("hello java!");
    }

    // 반환값이 있는 메서드
    // - "리턴타입"과 return 에서 실제 반환하는 데이터 형식이 일치해야 한다
    public static int sum1(int x, int y) { // 리턴타입: int / 실제 반환 타입: int
        return x + y;
    }

    public static String sum2(int x, int y) { // 리턴타입: String / 실제 반환 타입: String
        return "x + y = " + (x + y);
    }

    // call by value (값 전달)
    public static int mul1(int x, int y) {
        return x * y;
    }

    // call by reference (참조 전달)
    public static int mul2(int[] nums) {
//         return nums[0] * nums[1];

        // 배열 길이가 2보다 길 때 (각각의 인덱스를 곱하면 된다)
        int result = 1;
        for (int n : nums) {
            result *= n;
        }
        return result;
    }
}
