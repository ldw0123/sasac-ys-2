// 실습
// 1. 아래와 같이 오브젝트, 불리언(boolean) 데이터 타입 순으로 설정하는 튜플 만들어보기
// olimpic_newgame = [
//   {
//     name: '쇼트트랙',
//     type: '혼성 계주',
//   },
//   true,
// ];
var olimpic_newgame = [
    { name: '쇼트트랙', type: '혼성 계주' },
    true,
];
console.log(olimpic_newgame);
// 2. olimpic_newgame[1]=false; 를 했을 때 변경되지 않도록 수정할 수 없는 데이터 만들기
var olimpic_newgame2 = [
    { name: '쇼트트랙', type: '혼성 계주' },
    true,
];
console.log(olimpic_newgame2);
// olimpic_newgame2[1] = false; // error
