package _05_class._06_interface;

public class Ex1_Mp3Player implements Ex1_Music {
    // 필드
    private String song;

    // 생성자
    public Ex1_Mp3Player(String song) {
        this.song = song;
    }

    // 추상 메서드 구현
    @Override
    public void play() {
        System.out.println("MP3 플레이어에서 '" + song + "' 음악을 재생합니다");
    }

    @Override
    public void stop() {
        System.out.println("MP3 플레이어에서 '" + song + "' 음악을 재생합니다");
    }
}
