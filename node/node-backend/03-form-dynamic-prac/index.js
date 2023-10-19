const express = require('express');
const app = express();
const PORT = 8000;
app.set('view engine', 'ejs');

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res) {
  res.render('index');
});

// get 요청
// app.get('/get', function (req, res) {
//   console.log(req.query);
//   console.log(req.query.id);
//   res.send('get 요청 성공');
// });

// post 요청
// app.post('/post', function (req, res) {
//   console.log(req.body);
//   res.render('result', {
//     name: req.body.name,
//     gender: req.body.gender,
//   });
//   res.send('(post): 회원가입 되었습니다!');
// });

// axios get 요청
app.get('/axios', function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

// axios post 요청
app.post('/axios', function (req, res) {
  console.log(req.body);
  // res.send(req.body);

  const id = 'lily';
  const pw = '1234';

  if (req.body.id == id && req.body.pw == pw) {
    res.send('collect');
  } else res.send('failed');
});

// listen
app.listen(PORT, function () {
  console.log(`server Open: ${PORT}`);
});
