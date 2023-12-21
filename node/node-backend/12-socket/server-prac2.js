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
// { 'socket.id': 'userIdA', 'socket.idB': 'userIdC', 'socket.id': 'userId' }
const userIdArr = {};

// 유저를 알려줌
const updateUserList = () => {
  io.emit('userList', userIdArr);
};

// 공지사항
io.on('connection', (socket) => {
  console.log('socket id: ', socket.id);
  // [실습 3] socket id를 이용해 입장 공지
  // io.emit("notice", { msg: `${socket.id}님이 입장하셨습니다.` });

  // [실습 3-3] 퇴장시키기
  // 누가 입장하고 있는지 알아야 하고, 해당 정보를 전체적으로 저장할 필요가 있다

  // [실습 3-1] 입장 시 받은 user id로 입장 공지
  socket.on('entry', (res) => {
    // [실습 3-2] 닉네임 중복 방지
    // Object.values(userIdArr) => ["userIdA","userIdB", "userIdC"]
    // includes(): 문자열이나 배열에서 인자로 넘겨준 값이 존재하는지 안하는지 찾는 메서드
    // indexOf(): 배열에서 인자로 넘겨준 값의 인덱스를 추출하는 메서드. 없다면, -1을 반환
    if (Object.values(userIdArr).includes(res.userId)) {
      // 닉네임이 중복될 경우
      socket.emit('error', {
        msg: '중복된 아이디가 존재하여 입장이 불가합니다',
      });
    } else {
      // 중복되지 않을 경우 정상적으로 notice (io객체: 모든 클라이언트에게 이벤트 발송)
      io.emit('notice', { msg: `${res.userId}님이 입장하셨습니다.` });
      // 선수 입장
      socket.emit('entrySuccess', { userId: res.userId });
      userIdArr[socket.id] = res.userId;
      updateUserList();
    }
    // 중복 메시지를 보내주던지
    console.log('userIdArr: ', userIdArr);
  });

  // [실습 3-3] 퇴장시키기
  socket.on('disconnect', () => {
    io.emit('notice', { msg: `${userIdArr[socket.id]}님이 퇴장하셨습니다.` });
    delete userIdArr[socket.id]; // 삭제
    console.log('userIdArr: ', userIdArr);
    updateUserList();
  });

  // [실습 4, 5]
  socket.on('sendMsg', (res) => {
    if (res.dm === 'all')
      if (res.dm === 'all')
        // 유저의 id, 메시지를 전체에게 송신
        io.emit('chat', { userId: res.userId, msg: res.msg });
      else {
        // 원하는 사람에게만 메시지(socket)을 보낸다
        // io.to(socket.id).emit()
        io.to(res.dm === 'all').emit('chat', {
          userId: res.userId,
          msg: res.msg,
          dm: true,
        });
        // 나에게 보내는 메시지를 송신
        socket.emit('chat', { userId: res.userId, msg: res.msg, dm: true });
      }
  });
});

server.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
