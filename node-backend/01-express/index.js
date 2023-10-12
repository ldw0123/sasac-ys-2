const express = require('express'); // express 모듈 import
const app = express(); // server 객체 생성
const PORT = 8000; // 포트
// 1 ~ 65536 존재. 1 ~ 1023까지는 정해진 기능이 있음.
// 보통 사용하는 포트 번호 : 3000, 8000, 8080, 8010, 3010, 3001...
// 3306 : mySQL에서 사용하니 3306은 피해서 사용하면 됨

// esj 템플릿 설정
// set() : 서버를 설정하는 메서드
// app 객체의 view engine 설정을 ejs로 변경
app.set('view engine', 'ejs');
// app 객체의 view 폴더를 설정. 접근 기본값 : ./views
// 만약 ./view 폴더로 바꾸고 싶다면 아래처럼 작성하면 됨
// app.set('views', './view'); // 기본값을 바꾸기. 상대경로 설정 가능

// 미들웨어
// 클라이언트가 static 디렉터리에 접근할 수 있도록 허용함
app.use('/static', express.static(__dirname + '/static'));
// __dirname : ~~~~/01-express/static에 클라이언트가 /static 이름으로 들어올 수 있다
// 💫 브라우저 주소창에 localhost:8000/static 을 치면 static 디렉터리가 출력됨!!
app.use('/public', express.static(__dirname + '/static'));
// __dirname : ~~~~/01-express/static에 클라이언트가 /public 이름으로 들어올 수 있다

// get 메서드(http 메서드) : 클라이언트가 요청할 수 있는 방법들을 정의함
// localhost:8000 주소로 접속
app.get('/', function (req, res) {
  // 응답 객체 내의 send 메서드를 실행
  // send() : 값을 내보냄. "hello express" 문자열을 응답으로 전송하겠다
  res.send('hello express');
});
// http 메서드의 두 번째 인자로 넘겨주는 콜백함수의 매개변수 2개
// 첫 번째 매개변수: request 객체 (요청)
// 두 번째 매개변수: response 객체 (응답)
// 💫 브라우저 주소창에 localhost:8000 을 치면 hello express가 출력됨!!

// localhost:8000/test
app.get('/test', function (req, res) {
  // res.send('get test');
  // res.send('<div style = "color:red">안녕?</div>');
  res.sendFile(__dirname + '/index.html'); // __dirname : node의 전역변수
  console.log(__dirname); // 절대경로 출력 : C:\Users\SBA_USER\Desktop\SeSAC\sesac-ys-2\node-backend\01-express
  // res.sendFile('./index.html'); 상대경로 접근 불가
});
// 💫 브라우저 주소창에 localhost:8000/test 을 치면 get test가 출력됨!!

// ejs 사용하기 (렌더링)
// localhost8000/ejs
app.get('/ejs', function (req, res) {
  // render() 메서드 : ejs를 사용
  // render()의 기본 디렉터리 : "./views"
  res.render('index'); // 기본 디렉터리 ./views의 index 파일에 접근
  // res.render('test/index'); // test 폴더 하위의 index 파일에 접근
});
// 💫 브라우저 주소창에 localhost:8000/ejs 을 치면 index 파일이 열림!!
app.get('/lily', function (req, res) {
  res.render('lily', {
    name: 'name: lily',
    product: ['운동화', '후드집업', '스웨터', '셔츠', '구두'],
  });
});
// 💫 브라우저 주소창에 localhost:8000/lily 을 치면 lily.ejs 파일이 열림!!

// 서버를 연다
// 서버를 열게 되면 localhost:8000 or 127.0.0.1:8000 이라는 주소로 인터넷을 접속할 수 있게 됨
app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}! http://localhost:${PORT}`);
});
