const http = require('http'); // 소켓은 http 파일을 열어야만 사용할 수 있다
const express = require('express');
const app = express();
// 소켓은 http 모듈로 생성된 서버에서만 동작한다
const server = http.createServer(app);
const PORT = 8000;

// CORS issue
const cors = require('cors');
app.use(cors());

const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

// 딕셔너리 타입
// { 'socket.id': 'userId', 'socket.id': 'userId', 'socket.id': 'userId' }
const userIdArr = {};

// 공지사항
io.on('connection', (socket) => {
  console.log('socket id: ', socket.id);
  // [실습 3] socket id를 이용해 입장 공지
  // io.emit("notice", { msg: `${socket.id}님이 입장하셨습니다.` });

  // [실습 3-1] 입장 시 받은 user id로 입장 공지
  socket.on('entry', (res) => {
    // [실습 3-2] 닉네임 중복 방지
    // 상황(닉네임 중복)에 따라 정상적으로 notice를 하던지, 중복 메시지를 보내주던지
    io.emit('notice', { msg: `${res.userId}님이 입장하셨습니다.` });
    userIdArr[socket.id] = res.userId;
  });

  // [실습 3-3] 퇴장시키기
  socket.on('disconnect', () => {
    io.emit('notice', { msg: `${userIdArr[socket.id]}님이 퇴장하셨습니다.` });
    delete userIdArr[socket.id];
  });
});

server.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
