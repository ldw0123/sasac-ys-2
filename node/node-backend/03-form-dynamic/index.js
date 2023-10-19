const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// get 요청 : 데이터를 쿼리로 받아온다
app.get('/', function (req, res) {
  // render() : 파일을 읽어서 html 파일로 변환하여 보내줌
  res.render('index');
});

// get은 query에 데이터가 담겨서 온다
app.get('/ajax', function (req, res) {
  console.log(req.query);
  // query는 { key : value, key : value } 의 객체 형태
  res.send(req.query);
});

// post는 body에 데이터가 담겨서 온다
app.post('/ajax', function (req, res) {
  console.log(req.body);
  // query는 { key : value, key : value } 의 객체 형태
  res.send(req.body);
});

app.get('/axios', function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.post('/axios', function (req, res) {
  console.log(req.body);

  const data = {
    ...req.body, // 스프레드 연산자
    msg: '반가워요',
  };
  //   {
  //     id: ,
  //     name: ,
  //     pw: ,
  //     msg: "반가워요",
  //   };
  res.send(data);
});

app.get('/fetch', function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.post('/fetch', function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// listen
app.listen(PORT, function () {
  console.log(`server Open: ${PORT}`);
});
