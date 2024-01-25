package _05_class._06_interface;

// ⭐ interface 구현
// 인터페이스 구현 시 extends 키워드 대신 implements 키워드 사용
public class Television implements RemoteControl {
    // 필드
    private int volume;

    @Override
    public void turnOn() {
        System.out.println("텔레비전을 켭니다");
    }

    @Override
    public void turnOff() {
        System.out.println("텔레비전을 끕니다");
    }

    @Override
    public void setVolume(int volume) {
        // 인터페이스의 상수 필드를 이용해서 volume 필드의 값 제한
        if(volume > RemoteControl.MAX_VOLUME) {
            this.volume = RemoteControl.MAX_VOLUME;
        } else if (volume < RemoteControl.MIN_VOLUME) {
            this.volume = RemoteControl.MIN_VOLUME;
        } else {
            this.volume = volume;
        }

        System.out.println("현재 텔레비전의 볼륨은 " + this.volume + " 입니다");

    }

}
