const http = require('http'); // 소켓은 http 파일을 열어야만 사용할 수 있다
const express = require('express');
const app = express();
// 소켓은 http 모듈로 생성된 서버에서만 동작한다
const server = http.createServer(app);
const PORT = 8000;

// CORS issue: 다른 서버에서 보내는 요청을 제한한다. 서버를 2개 열어두면 보안상 막아둔다
// 따라서 이를 허용하도록 서버측 코드에서 명시해두어야 한다. $ npm i cors 로 모듈 설치
const cors = require('cors');
app.use(cors());

// 클라이언트와의 연결이 성공적으로 이루어졌을 때 실행되는 이벤트 핸들러
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    // methods: ['GET', 'POST'], // get, post 메서드 허용
  },
});

io.on('connection', (socket) => {
  console.log('socket id', socket.id);

  socket.on('hello', (res) => {
    console.log(res);
    socket.emit('resHello', { msg: '안녕하세요~' });
  });

  socket.on('study', (res) => {
    console.log(res);
    socket.emit('resStudy', { msg: '공부중' });
  });

  socket.on('bye', (res) => {
    console.log(res);
    socket.emit('resBye', { msg: '잘가세요~' });
  });
});

// app.listen이 아닌 server.listen!
server.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
