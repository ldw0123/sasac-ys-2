package _03_array;

// 표준 배열

import java.util.Arrays;

// 배열
// - 배열에 저장할 자료형을 선언하고, 배열의 이름과 크기를 선언해야 함
// - 배열의 원소는 모두 같은 타입이다
// - 처음 선언한 배열의 크기 변경은 불가능 (단, ArrayList 컬렉션을 통해 동적으로 배열의 크기 조정이 가능하다)
public class Array {

    public static void main(String[] args) {
        // 배열 변수 선언
        // - 두 가지 방법이 있으나, 관례적으로 첫 번째 방법 사용
        // 1. 타입[] 변수;
        // 2. 타입 변수[];
        int[] arr1; // 이 쪽을 선호!
        int arr2[];

        // - 배열 변수는 "참조 변수". 배열도 객체이므로 힙(Heap) 영역(동적으로 할당된 객체들이 저장되는 메모리 영역)에 생성되고, 배열 변수는 힙 영역의 주소를 저장한다
        // 참조형이기 때문에 null 저장 가능 (null로 초기화가 가능)
        // ex) 타입[] 변수 = null;
        // -> 배열 변수가 null 값을 가진 상태에서는 변수[인덱스]로 값을 읽거나 저장하게 되면 NullPointerException 에러가 발생
        String[] temp = null;
        System.out.println("temp: " + temp); // 출력: null
//    System.out.println(temp[0]); // NullPointerException 에러!

        // - 값 목록으로 배열 변수 선언과 배열 생성
        int[] intArray = {16, 22, 34, 41, 59};
        System.out.println("intArray[0]: " + intArray[0]);
        System.out.println("intArray[1]: " + intArray[1]);
        System.out.println("intArray[2]: " + intArray[2]);
        System.out.println("intArray: " + intArray); // 참조값 저장

        intArray[1] = 77; // 인덱스 1번 값 변경
        System.out.println("intArray[1]: " + intArray[1] + '\n');

        //////////////////////////////////////////

        // 주의! 중괄호로 감싼 목록을 배열 변수에 대입할 때, 배열 변수를 미리 선언한 수에는 값 목록을 변수에 대입 불가
        char[] charArray;
//        charArray = {'A', 'B', 'C'}; // 에러
        // 배열 변수 선언 시점과, 값 목록을 대입하는 시점이 다르다면 "new 타입[]"을 중괄호 앞에 붙여서 대입해야 한다
        charArray = new char[]{'A', 'B', 'C'}; // 이렇게 직접 넣어주면 됨!
        System.out.println("charArray[0]: " + charArray[0]);
        System.out.println("charArray[1]: " + charArray[1] + '\n');

        //////////////////////////////////////////

        // new 연산자로 배열 선언과 배열 생성
        // - new 연산자로 배열을 처음 생성하면 배열 항목을 기본 값으로 초기화 된다
        double[] doubleArray = new double[3];
        System.out.println("new 연산자로 초기화된 값: " + doubleArray[0]); // 0.0 으로 초기화 됨
        doubleArray[0] = 0.1;
        doubleArray[1] = 1.2;
        System.out.println("doubleArray[0]: " + doubleArray[0]);
        System.out.println("doubleArray[1]: " + doubleArray[1]);
        System.out.println("doubleArray[2]: " + doubleArray[1] + '\n');

        //////////////////////////////////////////

        // 배열 길이
        // - 배열변수.length;
        // - length 필드는 읽기만 가능, 값 변경 불가능
        System.out.println("doubleArray length: " + doubleArray.length + '\n');

        // - 배열 길이를 벗어난다면?
//        System.out.println(doubleArray[doubleArray.length]); // ArrayIndexOutOfBoundsException 에러

        //////////////////////////////////////////

        // 배열 출력
        // - Arrays.toString(): 배열 내용을 문자열로 변환하여 반환
        // - 배열 이름으로 배열 주소값이 아닌, 배열 내부 값을 모두 보고 싶을 때 사용
        System.out.println("intArray: " + Arrays.toString(intArray));
        System.out.println("charArray: " + Arrays.toString(charArray));
        System.out.println("doubleArray: " + Arrays.toString(doubleArray) + '\n');

        //////////////////////////////////////////

        // 다차원 배열
        // - 배열 안에 또 다른 배열이 존재하는 배열
        // 2 x 3 배열 생성 및 초기화
        // int[][] arr = {{x1, x2, x3}, {y1, y2, y3}};
        int[][] matrix1 = {{1, 2, 3}, {4, 5, 6}};

        // 3 x 2 배열 생성 및 초기화
        // int[][] arr = new int[y][x];
        int[][] matrix2 = new int[3][2];
        matrix2[0][0] = 1;
        matrix2[0][1] = 2;
        matrix2[1][0] = 3;
        matrix2[1][1] = 4;
        matrix2[2][0] = 5;
        matrix2[2][1] = 6;

        // 3차원 배열 생성 및 초기화
        int[][][] threeDimensionArr = {{{1, 2}, {3, 4}}, {{5, 6}, {7, 8}}};

        // matrix1 (2 x 3 배열)
        System.out.println("matrix1: ");
        for (int i = 0; i < matrix1.length; i++) {
            for (int j = 0; j < matrix1[i].length; j++) {
                System.out.print(matrix1[i][j] + " ");
            }
            System.out.println();
        }

        // matrix2 (3 x 2 배열)
        System.out.println("matrix2: ");
        for (int i = 0; i < matrix2.length; i++) {
            for (int j = 0; j < matrix2[i].length; j++) {
                System.out.print(matrix2[i][j] + " ");
            }
            System.out.println();
        }

        // threeDimensionArr (3차원 배열)
        System.out.println("threeDimensionArr: ");
        for (int i = 0; i < threeDimensionArr.length; i++) {
            for (int j = 0; j < threeDimensionArr[i].length; j++) {
                for (int k = 0; k < threeDimensionArr[i][j].length; k++) {
                    System.out.print(threeDimensionArr[i][j][k] + " ");
                }
                System.out.println();
            }
            System.out.println();
        }

        //////////////////////////////////////////

        // 배열 복사
        // - 배열은 크기가 고정되어 있다
        // -> 더 많은 저장 공간이 필요하다면, 더 큰 길이의 배열을 새로 만들어서 기존 배열을 복사한다

        // ver 1. 반복문으로 요소를 하나씩 복사
        int[] originArray = {1, 2, 3};
        int[] newArray = new int[5];

        for (int i = 0; i < originArray.length; i++) {
            newArray[i] = originArray[i];
        }
        System.out.println(Arrays.toString(newArray)); // [1, 2, 3, 0, 0]

        // ver 2. System.arraycopy() 사용
        // - System.arraycopy(Object scr, int scrPos, Object dext, int destPos, int length);
        // - Object src: 원본 배열
        // - int scrPos: 원본 배열의 복사 시작 인덱스
        // - Object dest: 새 배열
        // - int destPos: 새 배열의 붙여넣기 시작할 인덱스
        // - int length: 복사 항목 수
        String[] originFruits = {"apple", "banana", "strawberry", "orange"};
        String[] newFruits = new String[5];

        System.arraycopy(originFruits, 1, newFruits, 0, originFruits.length - 1);
        System.out.println(Arrays.toString(newFruits));

        // Arrays 메서드
        // copyOf(arr, copyArrayLength) 메서드: 배열 전체를 복사해서 복사할 길이만큼 새로운 배열로 반환
        int[] originalArray = {1, 2, 3, 4, 5};
        int[] copiedArray = Arrays.copyOf(originalArray, 3);
        System.out.println("originalArray: " + Arrays.toString(originalArray));
        System.out.println("copiedArray: " + Arrays.toString(copiedArray));

        // copyOfRange(arr, sInx, eInx) 메서드: 인덱스를 지정하여 복사한 새로운 배열 반환
        // sInx ~ eInx -1 의 인덱스 범위 지정
        int[] rangeArray = Arrays.copyOfRange(originalArray, 1, 4); // 1 ~ 3 인덱스 범위
        System.out.println("rangeArray: " + Arrays.toString(rangeArray));

        // fill(arr, n) 메서드
        // n으로 배열을 채워 준다
        int[] filledArray = new int[5];
        System.out.println("filledArray (before): " + Arrays.toString(filledArray)); // [0, 0, 0, 0, 0]
        Arrays.fill(filledArray, 7);
        System.out.println("filledArray (after): " + Arrays.toString(filledArray)); // [7, 7, 7, 7, 7]

        // sort(arr) 메서드: 오름차순 정렬
        int[] unsortedArray = {5, 3, 4, 2, 1};
        Arrays.sort(unsortedArray);
        System.out.println("sorted Array: " + Arrays.toString(unsortedArray)); // [1, 2, 3, 4, 5]

        // equals(arr1, arr2) 메서드: 두 배열의 "내용"이 동일한지 비교
        int[] array1 = {1, 2, 3};
        int[] array2 = {1, 2, 3};
        int[] array3 = {4, 5, 6};

        boolean arraysEqual = Arrays.equals(array1, array2);
        boolean arraysEqual2 = Arrays.equals(array1, array3);

        System.out.println("Arrays Equal (1 vs 2): " + arraysEqual); // true
        System.out.println("Arrays Equal (1 vs 3): " + arraysEqual2); // false

        // == 비교 : "주소값을 참조"하고 있으므로, 내용이 같더라도 false
        System.out.println("Arrays == (1 vs 2): " + (array1 == array2)); // false
        System.out.println("Arrays == (1 vs 3): " + (array1 == array3)); // false

        // deepEquals(arr1, arr2) 메서드: 단일 차원 또는 다차원 배열인 두 배열의 내용이 같은지 비교
        int[][] deepArray1 = {{1, 2}, {3, 4}};
        int[][] deepArray2 = {{1, 2}, {3, 4}};
        int[][] deepArray3 = {{1, 2}, {3, 5}};

        boolean deepArraysEqual = Arrays.deepEquals(deepArray1, deepArray2);
        boolean deepArraysEqual2 = Arrays.deepEquals(deepArray1, deepArray3);

        System.out.println("Deep Arrays Equal (1 vs 2): " + deepArraysEqual); // true
        System.out.println("Deep Arrays Equal (1 vs 3): " + deepArraysEqual2); // true

        // binarySearch(arr, val) 메서드: 배열의 특정 인덱스 요소값을 이진 검
        //색 알고리즘을 사용하여 검색한 후, 해당 위치 반환
        // 단, 배열은 정렬된 상태여야 함
        int[] sortedArray = {10, 30, 50, 70, 70};
        int index = Arrays.binarySearch(sortedArray, 50);
        System.out.println("Index of 50: " + index); // 2
    }
}
