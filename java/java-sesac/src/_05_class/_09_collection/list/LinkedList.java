package _05_class._09_collection.list;

import java.util.ArrayList;
import java.util.List;

public class LinkedList {
    public static void main(String[] args) {
        // ArrayList 컬렉션 객체를 생성
        List<String> list1 = new ArrayList<>();

        // LinkedList 컬렉션 객체 생성
        List<String> list2 = new java.util.LinkedList<>();

        // 시간, 끝 변수 선언
        long startTime;
        long endTime;

        // ArrayList의 0번 인덱스에 데이터 추가(10000회 반복)
        startTime = System.nanoTime();
        for (int i = 0; i < 10000; i++) {
            list1.add(0, String.valueOf(i));
        }
        endTime = System.nanoTime();
        System.out.println("ArrayList 소요 시간: " + (endTime - startTime)); //ArrayList 소요 시간: 4967400

        // LinkedList의 0번 인덱스에 데이터 추가(10000회 반복)
        startTime = System.nanoTime();
        for (int i = 0; i < 10000; i++) {
            list2.add(0, String.valueOf(i));
        }
        endTime = System.nanoTime();
        System.out.println("LinkedList 소요 시간: " + (endTime - startTime)); // LinkedList 소요 시간: 722300

        // 결과 해석
        // - LinkedList가 요소 추가에 대해 더 빠른 성능을 냄
        // - ArrayList는 0번 인덱스에 새로운 요소를 추가하면서, 기존 요소 인덱스를 한 칸씩 뒤로 미는 작업을 하기 때문

    }
}