package _05_class._01_class;

import java.util.ArrayList;
import java.util.Scanner;

// 클래스 실습 upgrade
// Rectangle 클래스 (사각형의 넓이를 구하는 클래스)
public class RectangleEx2 {
    // 필드
    private int width;
    private int height;

    public int getWidth() {
        return this.width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public int getHeight() {
        return this.height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    // 생성자
    public RectangleEx2(int width, int height) {
        // 지역변수랑 필드 변수명이 동일하기 때문에 this 사용해서 필드 값에 접근
        this.width = width;
        this.height = height;
    }

    // 사각형의 넓이를 반환하는 메서드
    public int area() {
        return width * height;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        ArrayList<RectangleEx2> rect = new ArrayList<>();

        while(true) {
            System.out.println("사각형의 가로와 세로 길이를 띄어쓰기를 이용하여 입력해주세요");
            int width = sc.nextInt();
            int height = sc.nextInt();
            rect.add(new RectangleEx2(width, height));
            if(width == 0 && height == 0) {
                break;
            }

        }

        for (int i = 0; i < rect.size()-1; i++) {
            System.out.println("가로 길이는: " + rect.get(i).getWidth());
            System.out.println("세로 길이는: " + rect.get(i).getHeight());
            System.out.println("넓이는: " + rect.get(i).area());
            System.out.println("----------------------------------------");
        }
    }
}
