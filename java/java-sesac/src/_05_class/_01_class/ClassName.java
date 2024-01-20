package _05_class._01_class;



public class ClassName {
    // 필드 (변수)
    public int number;
    public String name;
    
    // 메서드 (함수)
    
    // 생성자 -> 클래스명과 동일한 이름
    public  ClassName() {
        
    }
    
    public void testMethod() {
        System.out.println("test method!");
    }

    public static void main(String[] args) {
        // 객체 생성 (인스턴스화)
        ClassName test = new ClassName();
        
        // 필드, 메서드 사용
        test.testMethod();
        System.out.println(test.name); // null
        System.out.println(test.number); // 0
    }
}
