package _05_class._06_interface;

public class Ex1_MusicPlayer {
    public static void main(String[] args) {
        Ex1_Music music; // // Ex1_Music 타입의 변수 생성

        music = new Ex1_Mp3Player("블루밍");
        System.out.println("==== MP3 Player ====");
        music.play();
        music.stop();
        System.out.println();

        music = new Ex1_CdPlayer("꽃갈피");
        System.out.println("==== CD Player ====");
        music.play();
        music.stop();
    }
}
