const express = require('express');
const app = express(); // app 객체 선언
const PORT = 8000; // 포트 번호

app.set('view engine', 'ejs'); // view 템플릿 엔진을 ejs로 설정함
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = require('./routes'); // ./routes/index.js를 불러온다
app.use('/', router);

// 존재하지 않는 get 요청에 대해서
// * : 어떤 라우터이든 상관 없다 라는 뜻
app.get('*', function (req, res) {
  res.send('404');
});

// listen
app.listen(PORT, function () {
  console.log(`server Open: ${PORT}`);
});
