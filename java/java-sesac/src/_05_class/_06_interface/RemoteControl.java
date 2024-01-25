package _05_class._06_interface;

// ⭐ interface 선언
// 인터페이스 선언 시 class 키워드 대신 interface 키워드 사용
public interface RemoteControl {
    // 추상 메서드 선언
    // abstract 키워드를 붙이지 않아도 자동적으로 추상 메서드로 인식된다
    public void turnOn(); // 메서드에 public abstract 생략 가능
    public void turnOff();
    public void setVolume (int volume);

    // 상수 필드
    // 인터페이스에 선언된 필드는 모두 "public static final" 특성을 갖는다
    // 생략하더라도 컴파일 과정에서 자동으로 붙게 된다
    // 상수명은 대문자로 작성, 여러 단어로 연결된 경우 언더바(_)로 연결한다
    int MAX_VOLUME = 10; // 상수에 public final 생략 가능
    int MIN_VOLUME = 0;
}
