const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

// 💡 body-parser
// req.body를 해석하기 위한 코드
app.use(express.urlencoded({ extended: true }));
// x-www-form-unlencoded 형태의 데이터를 해석
// extended : true일 경우 qs 모듈(외부 모듈)을 이용한다. false일 경우, 내장 모듈인 queryString을 사용한다

app.use(express.json());

// localhost:8000 url  접속에 대한 응답을 위해 만든 코드(get요청)
app.get('/', function (req, res) {
  res.render('index');
});

app.get('/hello', function (req, res) {
  // 데이터 베이스(재료)

  // 재료를 볶아

  // 재료를 볶고 음식을 만듬

  // 음식을 제공

  res.render('index');
});

app.get('/hello/{1}', function (req, res) {
  res.render('index');
});

// 💡 get 요청
// get 요청은 req.query에 데이터를 담겨서 온다!!
// get 요청은 url로 직접 접속(요청)이 가능하다!
// -> 주소창에 http://localhost:8000/?id=lily&pw=1234 와 같이 작성하면 바로 접속이 가능!
// 데이터 전송 시에 form 태그를 이용할 경우, method를 get으로 해 놓으면 get 요청이 된다
// get 요청으로 url에 직접 query를 만들어서 전송이 가능하다
// get 요청은 url에 전송되는 데이터가 노출된다. 즉, 개인정보 전송은 get으로 하면 안 된다
// 정보를 조회하는 요청 주로 사용 (CRUD 중에서 Read를 사용하는 요청에 사용)
app.get('/get', function (req, res) {
  console.log(req.query); // { id: 'lily', pw: '1234' } 객체 정보
  console.log(req.query.id); // lily
  // req.query : get 요청에 대해 client가 보낸 데이터를 담고 있다
  // req.query는 url에서 기본 주소(localhost:8000/get) 뒤에 오는 ?id=lily&pw=1234 이런 주소를 의미함
  // 기본주소?id=lily&pw=1234

  res.send('get 요청 성공'); // send() : 특정 값(문자열)을 보냄
});

// 💡 post 요청
// localhost:8000/post로 post 요청을 받기 위한 준비
// post 요청은 url로 직접 접속(요청)이 불가능하다
// post 요청에 대한 데이터는 req.body에 담겨서 온다!!
// post 요청은 정보가 숨겨짐 (url에 노출되지 않음)
// 데이터를 주로 생성하는 요청에 주로 사용 (CRUD 중에서 Create를 사용하는 요청에 사용)
app.post('/post', function (req, res) {
  console.log(req.body);

  // 음식을 만든다

  res.send('post 요청 성공!');
});

app.post('/post/ver2', function (req, res) {
  console.log(req.body);
  // res.render() : 서버가 클라이언트에게 result.ejs를 렌더링하여 보내겠다는 의미. ejs파일이 렌더링 되고 html이 된 후에 html 문서를 클라이언트에게 response함

  // 음식

  nickname: '민' + req.body.name;

  res.render('result', {
    name: nickname,
    email: req.body.email,
  });
});

// 참고!
// 조회, 데이터 저장(db에 데이터 삽입), 원래 있던 데이터를 변경하기 위해, 데이터를 삭제하기 위해
// CRUD (create, read, update, delete의 약어)

// app.listen이 있어야 서버가 켜짐!
app.listen(PORT, function () {
  console.log(`server open: ${PORT}`);
});
