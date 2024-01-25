package _05_class._06_interface;

// Ex1_Music 인터페이스 구현
public class Ex1_CdPlayer implements Ex1_Music{
    // 필드
    private String album;

    public Ex1_CdPlayer(String album) {
        this.album = album;
    }

    // 추상 메서드 구현
    @Override
    public void play() {
        System.out.println("CD 플레이어에서 '" + album + "' 앨범을 재생합니다");
    }

    @Override
    public void stop() {
        System.out.println("CD 플레이어에서 '" + album + "' 앨범을 정지합니다");
    }
}
