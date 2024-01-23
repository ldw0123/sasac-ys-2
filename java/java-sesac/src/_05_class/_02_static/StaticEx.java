package _05_class._02_static;

import java.util.ArrayList;
import java.util.Scanner;

public class StaticEx {
    // 필드
    private String name; // 이름
    private int student_ID; // 학번
    private int grade; // 학년

    // static 변수
    private static int totalStudents = 0; // 전체 학생 수

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getStudent_ID() {
        return student_ID;
    }

    public void setStudent_ID(int student_ID) {
        this.student_ID = student_ID;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    public static int StudentsCount() {
        return totalStudents;
    }

    // 생성자
    // 생성자의 매개변수로 필드 변수값을 전달받고, 이름 / 학번 / 학년 초기화, 학생 수 증가
    public StaticEx(String name, int student_ID, int grade) {
        this.name = name; // 변수 초기화
        this.student_ID = student_ID;
        this.grade = grade;
        totalStudents++; // 학생 수 증가
    }

    // 메서드
    public void displayInfo() {
        System.out.println("=== 학생 정보 ===");
        System.out.println("이름: " + name);
        System.out.println("학번: " + student_ID);
        System.out.println("학년: " + grade);
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // Rectangle 객체를 담는 ArrayList 생성
        ArrayList<StaticEx> students = new ArrayList<>();

        // 사용자로부터 학생의 정보를 ArrayList 에 Student 인스턴스 차례로 추가
        int i = 0;
        while (i < 3) {
            System.out.println("3명의 학생의 정보를 이름 / 학번 / 학년 순으로 입력해주세요 >>");
            String name = sc.next();
            int student_ID = sc.nextInt();
            int grade = sc.nextInt();

            i++;

            StaticEx student = new StaticEx(name, student_ID, grade);
            student.setName(name); // 이름 추가
            student.setStudent_ID(student_ID); // 학번 추가
            student.setGrade(grade); // 학년 추가

            // Arraylist 에 student 객체 추가
            students.add(student);
        }

        // 반복문을 통해 ArrayList 출력
        for (StaticEx student : students) {
            System.out.println("==== 학생 정보 ====");
            System.out.println("이름: " + student.getName());
            System.out.println("학번: " + student.getStudent_ID());
            System.out.println("학년: " + student.getGrade());
            System.out.println();
        }
        System.out.println("총 학생 수는 " + StaticEx.StudentsCount() + "명 입니다");
    }
}
