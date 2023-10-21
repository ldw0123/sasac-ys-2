const express = require('express');
const multer = require('multer'); // multer 불러오기
const path = require('path'); // path: 파일 경로를 받았을 때, 그 조작을 도와준다 ex) 확장자 추출, 파일 이름 추출
console.log('hi.txt의 확장자:', path.extname('hi.txt')); // path.extname() : 확장자만 가져옴
console.log('hi.txt의 이름 :', path.basename('hi.txt', path.extname('hi.txt'))); // path.basename() : 원래 이름을 가져옴

const app = express();
const PORT = 8000;

// 클라이언트가 uploads 폴더에 저장한 이미지 파일에 접근할 수 있도록, 미들웨어 작성
// __dirname : 절대경로로, index.js가 위치한 폴더 경로를 알려 줌
app.use('/uploads', express.static(__dirname + '/uploads')); // express 처음 할 때 배웠음!

// multer
const upload = multer({
  dest: 'uploads/',
});

// multer 세부 설정
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, 'uploads/'); // 'uploads/'는 경로
    },
    filename: function (req, file, done) {
      console.log('uploadDetail filename', req.body);
      // 파일명 변경
      console.log(file); // file.originalname : 이름과 확장자를 가져옴
      const ext = path.extname(file.originalname); // path.extname() : 확장자만 가져옴
      const basename = path.basename(file.originalname, ext); // path.basename() : 원래 이름을 가져옴

      const fileName = basename + '_' + Date.now() + ext; // 현재 date를 가져와서(Date.now()) 붙여버림

      done(null, fileName);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 파일 크기에 대한 제한 (5MB 제한)
});

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res) {
  res.render('index');
});

// upload.single()
app.post('/upload', upload.single('profile'), function (req, res) {
  console.log('file', req.file);
  console.log('body', req.body);
  res.send('파일 업로드');
});

app.post('/upload/detail', uploadDetail.single('profile'), function (req, res) {
  console.log('file detail', req.file);
  console.log('body detail', req.body);

  // 렌더링
  res.render('result', {
    src: req.file.path,
    name: req.body.name,
    id: req.body.id,
    pw: req.body.pw,
    age: req.body.age,
  });
  res.send('파일 업로드');
});

// 동적 폼 전송(axios)를 이용한 파일 업로드
app.post(
  '/upload/dynamic',
  uploadDetail.single('userfile'),
  function (req, res) {
    // 동적 폼 전송이므로 render 하면 안 됨!
    res.send({
      src: req.file.path,
      name: req.body.name,
      id: req.body.id,
      pw: req.body.pw,
      age: req.body.age,
    });
  }
);

// listen
app.listen(PORT, function () {
  console.log(`server Open: ${PORT}`);
});
