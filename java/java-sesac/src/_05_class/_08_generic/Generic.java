package _05_class._08_generic;

import java.util.ArrayList;

// 제네릭 클래스
class CustomListGeneric<T> {
    // list의 타입은 T
    ArrayList<T> list = new ArrayList<>();
    
    public void addElement(T element) {
        list.add(element);
    }
    
    public void removeElement(T element) {
        list.remove(element);
    }
    
    public T get(int i) {
        // 인덱스 번호로 반환
        return list.get(i);
    }

    @Override
    public String toString() {
        return "CustomListGeneric = " + list;
    }
}
public class Generic {
    public static void main(String[] args) {
        // 제네릭 사용

        // Integer 타입 ArrayList
        CustomListGeneric<Integer> genericList = new CustomListGeneric<>();
        genericList.addElement(1); // element 추가
        genericList.addElement(3);
        genericList.addElement(6);
        System.out.println(genericList.toString()); // [1, 3, 6]
        
        Integer el = genericList.get(1); // Integer 형으로 반환

        // Character 타입 ArrayList
        CustomListGeneric<Character> genericList2 = new CustomListGeneric<>();
        genericList2.addElement('A');
        genericList2.addElement('B');
        genericList2.addElement('C');
        System.out.println(genericList2.toString()); // [A, B, C]
    }
}
