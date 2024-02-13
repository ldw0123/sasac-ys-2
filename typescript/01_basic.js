// JS : const str = "hello"
var str = 'hello';
console.log(str);
// JS : let num = 5
var num = 6;
var undif1;
var undif2 = undefined;
// undif = 3; // error
var nu = null;
// nu = 3 // error
// 숫자 배열
var arr1 = [1, 2, 3, 4, 5];
// let arr2: number[] = [1, 2, 3, 4, 'abc']; // error
// 문자열 배열
var strArr1 = ['abc', 'def'];
var strArr2 = ['abc', 'def']; // 이런 방법도 있음
// 숫자 or 문자열 타입 둘 다 가능
var numStrArr1 = [1, 'a'];
var numStrArr2 = 1;
numStrArr2 = 5;
var numStrArr3 = 'a';
var numStrArr4 = ['123', 'abc'];
// any: 아무 타입이나 가능. 하지만 지양해야 함
var anyArr = [1, 'a', null, undefined, {}];
// 객체 배열
var obj1 = {
    name: 'lily',
};
// interface, type
var obj2 = {
    name: 'lily',
};
// Tuple
var drink1 = ['cola', 2500]; // 타입 선언을 하고, 초기화
console.log(drink1[0]);
drink1[0] = 'juice';
console.log(drink1[0]);
// drink1[2] = 'juice'; // error. tuple의 길이는 2로 고정
drink1.push('이건 되지롱 하하'); // push()로 길이 3으로 만들 수 있다 -> Tuple의 한계
// console.log(drink1[2]); // error. 직접 접근은 불가
console.log(drink1);
var drink2 = ['cola', 2500]; // 읽기만 가능
// drink2[0] = 'soda'; // error. 변경 불가
// drink2.push('이건 안 되네......'); // error. push()로도 변경 불가
// enum
// 날씨들 sunny, rainy, cloudy
var Weather1;
(function (Weather1) {
    Weather1["sunny"] = "sunny";
    Weather1["rainy"] = "rainy";
    Weather1["cloudy"] = "cloudy";
})(Weather1 || (Weather1 = {}));
console.log(Weather1.sunny);
console.log(Weather1.rainy);
var Weather2;
(function (Weather2) {
    Weather2[Weather2["sunny"] = 0] = "sunny";
    Weather2[Weather2["rainy"] = 1] = "rainy";
    Weather2[Weather2["cloudy"] = 2] = "cloudy";
})(Weather2 || (Weather2 = {}));
console.log(Weather2.sunny); // 0
var weather = 0;
if (weather == Weather2.sunny) {
    console.log('맑은 날씨');
}
var aaa = 2;
// let aaa: Weather2 = 3; // error
