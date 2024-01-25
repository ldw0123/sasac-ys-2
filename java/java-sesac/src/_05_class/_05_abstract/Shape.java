package _05_class._05_abstract;

// ⭐ 추상 클래스
public abstract class Shape {
    // 필드 선언
    String color;

    // 생성자 선언
    public Shape(String color) {
        this.color = color;
    }
    
    // 추상 메서드 선언 (abstract 키워드 사용)
    // - 선언만 하고, 구현은 하지 않는다
    // - 중괄호 없음
    // - 구현 내용이 자식 클래스마다 다른 경우 추상 메서드 사용
    abstract void draw(); // 선언만 한다 (구현부 없음)

    // 일반 메서드
    void start() {
        System.out.println("도형을 그려보자~");
    }

    // getter
    String getColor() {
        return color;
    }
}
