const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ⭐ 동적 폼 전송을 router, controller, model, view 폴더 분리하기 실습
// 1. router 분리 (요청을 정의) -> routes/user.js로 분리
// 2. controller 분리 (요청에 대해 데이터 처리, view render, client에 응답) -> controller/CUser.js로 분리
// 3. model 분리 (DB에 접근하여 데이터를 select, insert, update, delete)

// app.get('/', function (req, res) {}); 에서
// router : get('/', 부분
// controller : function (req, res) {} 부분

const router = require('./routes/user');
app.use('/user', router);
// localhost:8000/user/~~~~

// listen
app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
