const express = require('express');
const app = express(); // app 객체 선언
const PORT = 8000; // 포트 번호

app.set('view engine', 'ejs'); // view 템플릿 엔진을 ejs로 설정함
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// [before] 이전에 사용하던 코드
// app.get('/', function (req, res) {
//   res.render('index'); // index.ejx render
// });

// [after]
// 1) app.get('/', -> 부분을 routes폴더의 index.js 파일로 분리,
// 2) function (req, res) {
//   res.render('index'); // index.ejs render
// }); - > 부분을 controller 폴더의 Cmain.js 파일로 분리함

// routes 폴더 불러오기
// const router = require('./routes/index');
const router = require('./routes'); // index.js인 경우만 생략 가능
app.use('/', router); // 미들웨어로 걸어 둠
// localhost:8000/~~~~ 기본 라우터 부터 ~~ 뒤에 뭐가 오든 다 router 객체 안으로 들어간다

// 존재하지 않는 get 요청에 대해서
// * : 어떤 라우터이든 상관 없다 라는 뜻
app.get('*', function (req, res) {
  res.send('페이지를 찾을 수 없습니다.');
});

// listen
app.listen(PORT, function () {
  console.log(`server Open: ${PORT}`);
});
