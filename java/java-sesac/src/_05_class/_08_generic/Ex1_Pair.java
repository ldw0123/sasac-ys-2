package _05_class._08_generic;

// Pair 클래스는 두 개의 제네릭 타입 K와 V를 가진다.
// Pair 클래스는 두 개의 프라이빗 멤버 변수, key와 value를 갖는다.
// Pair 클래스는 생성자를 통해 key와 value를 초기화
// 각 변수에 대해 getter 메서드를 제공
public class Ex1_Pair<K, V> {

    private K key;
    private V value;

    // 생성자
    public Ex1_Pair(K key, V value) {
        this.key = key;
        this.value = value;
    }

    // key에 대한 getter 메서드
    public K getKey() {
        return key;
    }

    // value에 대한 getter 메서드
    public V getValue() {
        return value;
    }

    public static void main(String[] args) {
        // 첫 번째 Pair 객체 생성 및 초기화
        Ex1_Pair<String, Integer> pair1 = new Ex1_Pair<>("One", 1);

        // 출력
        System.out.println(
                "Key: " + pair1.getKey() + ", Value: " + pair1.getValue()
        );

        // 두 번째 Pair 객체 생성 및 초기화
        Ex1_Pair<Integer, String> pair2 = new Ex1_Pair<>(2, "Two");

        // 출력
        System.out.println(
                "Key: " + pair2.getKey() + ", Value: " + pair2.getValue()
        );
    }
}
