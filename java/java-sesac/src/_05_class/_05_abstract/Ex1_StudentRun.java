package _05_class._05_abstract;

public class Ex1_StudentRun {

    public static void main(String[] args) {
        // 객체 생성
        Ex1_Kim kim = new Ex1_Kim("김철수", "새싹 고등학교", 17, 20240001);
        Ex1_Baek kawk = new Ex1_Baek("곽갑철", "새싹 여자고등학교", 19, 20220003);

        System.out.println("=== " + kim.getName() + " 학생의 정보" + " ===");
        System.out.println("학교: " + kim.getSchool());
        System.out.println("나이: " + kim.getAge());
        System.out.println("학번: " + kim.getNumber());
        System.out.print(kim.getName() + " 학생의 한 마디: ");
        kim.todo();
        System.out.println();

        System.out.println("=== " + kawk.getName() + " 학생의 정보" + " ===");
        System.out.println("학교: " + kawk.getSchool());
        System.out.println("나이: " + kawk.getAge());
        System.out.println("학번: " + kawk.getNumber());
        System.out.print(kawk.getName() + " 학생의 각오: ");
        kawk.todo();
    }
}
