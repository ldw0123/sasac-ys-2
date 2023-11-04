const express = require('express');
const app = express();
const port = 8000;
// Cookie
const cookieParser = require('cookie-parser');
// ejs
app.set('view engine', 'ejs');
// 쿠키를 해석하고 사용할 수 있게 해줌
app.use(cookieParser());

app.get('/get', (req, res) => {
  res.render('index');
});

app.get('/', (req, res) => {
  res.render('index');
});

// 쿠키 설정하기
const cookieConfig = {
  // httpOnly : boolean값. 브라우저에서 접근을 가능하게 한다
  // httpOnly: true, // document.cookie에서의 접근을 불허하겠다. 서버에서만 쿠키에 접근할 수 있다
  // maxAge : 정해진 키 값(수정x). 만료일 설정. ms 단위로 보존하고자 하는 기간을 설정
  maxAge: 30000, // 30초
  // expires : "2023-11-04T14:00" 형식
  // path : 라우터 직접 설정
  // '/test' -> (http://localhost:8000/test/~~) test 하위의 모든 라우터에 쿠키가 존재
  // path: '/', // 모든 라우터에 쿠키가 존재
  // // secure : boolean값. https 보안 서버에서만 쿠키를 동작하게 한다
  // secure: true,
  // // signed: boolean값. 쿠키를 암호화한다. req.signedCookies 에서 조회
  // signed: true,
};

// '/' -> 기본값 : http://localhost:8000/~~ 에서 쿠키 존재
// 쿠키 key, value 지정
app.get('/set', (req, res) => {
  // 서버가 쿠키를 만들어서 응답으로 보낸다
  // key : key1 / value : value1
  res.cookie('key1', 'value1', cookieConfig);
  res.cookie('popup', '1', cookieConfig);
  res.send('set cookie');
});

app.get('/get', (req, res) => {
  // req.cookies로 가져옴(조회)
  console.log('cookie: ', req.cookies);
  res.send(req.cookies);
});

app.listen(port, () => {
  console.log('Server Port: ', port);
});
