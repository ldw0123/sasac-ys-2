package _05_class._07_wrapper;

// 래퍼(Wrapper) 값 비교
// 1) ==, != 연산자로 포장 객체 내부 값을 비교가 불가능하다
// 2) equals() 메서드 이용. 두 객체의 주소 값이 아닌 필드 값 비교
// 다만, 특정 범위에 포함되는 값은 포장 객체가 공유된다 (같은 찹조값을 참조하고 있다)
// 3) 대부분의 포장 클래스에는 "parse + 기본 타입" 명으로 된 static 메서드 존재 -> 기본 타입으로 변환할 때 사용

public class ValueCompare {
    public static void main(String[] args) {
        // -128 ~ 127 이내의 값을 갖는 경우
        Integer obj1 = 10;
        Integer obj2 = 10;
        System.out.printf("%d == %d : %b%n", obj1, obj2, obj1 == obj2);
        // 원래라면, 다른 주소값을 참조해서 obj1 == obj2 가 false가 나와야 하지만
        // 같은 주소값을 참조하고 있으므로, true가 출력
        // -128 ~ 127 이외의 값을 갖는 경우 false가 출력된다
    }
}
