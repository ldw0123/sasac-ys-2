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

// ⭐ multer
// 파일이 업로드 될 기본 경로를 multer로 지정해주면 미들웨어 사용 가능
// upload라는 객체 안에는 미들웨어 함수가 존재. single(), array()... 등의 함수
// 미들웨어: 요청과 응답 사이에 존재. next() 함수를 가지고 있음
// 파일을 업로드하면, uploads/ 폴더가 새로 생기고, multer가 임의의 문자열을 생성해서 그 문자열을 파일 이름을 생성. 심지어 확장자도 붙여주지 않는다. 확장자를 변경해주면 이미지가 보인다
const upload = multer({
  dest: 'uploads/',
});

// ⭐ multer 세부 설정
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      // done은 콜백함수
      done(null, 'uploads/'); // 'uploads/'는 경로
    },
    filename: function (req, file, done) {
      // 파일명 변경
      console.log(file); // file.originalname : 이름과 확장자를 가져옴 -> minion.webp
      const ext = path.extname(file.originalname); // path.extname() : 확장자만 가져옴 -> .webp
      const basename = path.basename(file.originalname, ext); // path.basename() : 원래 이름을 가져옴 -> minion

      const fileName = basename + '_' + Date.now() + ext; // 현재 date를 가져와서(Date.now()) 붙여버림 -> minion.webp

      done(null, fileName);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 파일 크기에 대한 제한 (5MB 제한)
});

// 디렉토리 위치 관계
// storage : 파일을 저장할 정보
// -- diskStorage : 파일을 디스크에 저장하기 위한 메서드
// ----- destination : 파일이 저장될 경로
// ----- filename : 파일이 저장될 이름

// limits
// -- fileSize : 파일의 최대 크기

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res) {
  res.render('index');
});

// upload.single() 미들웨어. 인자는 client의 input 태그의 name값으로 일치시켜야 함. userfile의 이름으로 파일이 들어온다 라는 뜻
// single(), array(), fields(), : 미들웨어. 클라이언트가 보낸 요청 중에 파일 데이터(userfile이라는 name)가 있다면, 파일을 multer의 설정대로 저장해서 req.file or req.files이란 객체를 다음 함수(function())에 넘겨 준다
// single() : 파일 하나만 업로드할 때 사용함 -> req.file 생성
app.post('/upload', upload.single('userfile'), function (req, res) {
  console.log('file', req.file);
  console.log('body', req.body);
  res.send('파일 업로드');
});

// 인자는 client의 input 태그의 name값(userfile)으로 일치시켜야 함
app.post(
  '/upload/detail',
  uploadDetail.single('userfile'),
  function (req, res) {
    console.log('file detail', req.file);
    console.log('body detail', req.body);

    // 렌더링
    res.render('result', {
      src: req.file.path,
      title: req.body.title,
    });
    res.send('파일 업로드');
  }
);

// ⭐ multer 파일 여러 개 업로드

// ver.1
// array() : name(input) 하나로 여러 개의 파일을 받는 방법
// req.files 생성. 여러 개니까 's' 붙임
app.post('/upload/array', uploadDetail.array('userfile'), function (req, res) {
  console.log('file 여러 개 (ver.1): ', req.files);

  res.send('여러 개 업로드 성공~!');
});

// ver.2
// uploadDetail.fields() : 파일 여러 개 업로드. name이 두 개 이상(input이 2개 이상)
// 하나의 name에 여러 개를 받을 수 있음 (.ejs 파일 input 태그에 multiple 속성 지정)
// req.files 생성. 여러 개니까 's' 붙임
app.post(
  '/upload/fields',
  uploadDetail.fields([{ name: 'userfile1' }, { name: 'userfile2' }]),
  function (req, res) {
    console.log('file 여러 개 (ver.2): ', req.files);
    console.log('req.body', req.body);

    res.send('여러 개 업로드 성공~!');
  }
);

// ⭐ 동적 폼 전송(axios)를 이용한 파일 업로드
app.post(
  '/upload/dynamic',
  uploadDetail.single('userfile'),
  function (req, res) {
    // 동적 폼 전송이므로 render 하면 안 됨!
    res.send({ src: req.file.path });
  }
);

// listen
app.listen(PORT, function () {
  console.log(`server Open: ${PORT}`);
});
