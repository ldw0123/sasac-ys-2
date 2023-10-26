const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 8000;

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);

      done(null, req.body.userid + '_' + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// 동적 파일 업로드를 위한 이미지 폴더 접근 설정
app.use('/uploads', express.static(__dirname + '/uploads'));
// css 를 위한 폴더 접근 설정
app.use('/static', express.static(__dirname + '/static'));

app.get('/', function (req, res) {
  res.render('index');
});

app.post('/result', uploadDetail.single('profile'), function (req, res) {
  res.render('result', {
    userInfo: req.body,
    // src: req.file.path,
  });
});

app.post('/upload', uploadDetail.single('profile'), function (req, res) {
  res.send({
    ...req.body,
    // src: req.file.path,
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
