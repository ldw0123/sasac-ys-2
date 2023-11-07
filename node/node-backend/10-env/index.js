const express = require('express');
const path = require('path');
const app = express();
const port = 8000;
const dotenv = require('dotenv');
// cross-env : 배포 버전이냐? 개발 버전이냐? 에 따라 다른 env 파일을 로드할 수 있게끔 도와준다

// node.js 환경변수 확인
// console.log(process.env);

// index.js와 같은 위치에 있는 .env 파일을 불러와서 환경변수로 사용할 수 있게끔 한다
dotenv.config({ path: path.join(__dirname, './config/envs/.env') }); // path(경로) 직접 지정

console.log('test var: ', process.env.TEST_VAR);

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log('Server Port: ', process.env.PORT);
});

// package.json : Node.js 명령어 단축을 예약해 두는 곳
