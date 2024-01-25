package _05_class._06_interface;

public class RemoteControlRun {
    public static void main(String[] args) {
        // interface 도 하나의 타입이므로, 변수의 타입으로 사용 가능
        // - interface 는 참조 타입 (기본타입 x) -> null 대입 가능
        RemoteControl rc; // RemoteControl 타입의 변수 생성. 초기값은 null

        // rc 변수에 Television 객체를 대입
        // 객체 생성. RemoteControl rc = new Television(); 과 동일
        rc = new Television();
        rc.turnOn();
        rc.setVolume(7);
        rc.turnOff();
        System.out.println();

        // rc 변수에 Audio 객체를 대입 (교체)
        // RemoteControl rc = new Audio(); 과 동일
        rc = new Audio();
        rc.turnOn();
        rc.setVolume(13);
        rc.turnOff();
    }
}
