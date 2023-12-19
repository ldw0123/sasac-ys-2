const http = require('http'); // 소켓은 http 파일을 열어야만 사용할 수 있다
const express = require('express');
const app = express();
// 소켓은 http 모듈로 생성된 서버에서만 동작한다
const server = http.createServer(app); // app이 생성된 다음, app을 연결하여 서버를 생성
const PORT = 8000;

const io = require('socket.io')(server); // 소켓 객체 생성
// 위아래 동일
// const Socket = require('socket.io');
// const io = Socket(server);

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('client1');
});

// 클라이언트와의 연결이 성공적으로 이루어졌을 때 실행되는 이벤트 핸들러
io.on('connection', (socket) => {
  // 콜백함수의 매개변수에 있는 socket 객체: 접속한 클라이언트의 소켓
  console.log('socket id: ', socket.id); // 새로고침할 때마다 disconnect되었다가 connect하기 때문에 id값이 매번 바뀐다

  // socket.on(수신할 이벤트 이름, [수신 데이터])
  // 클라이언트에서 socket을 이용해서 보내준 데이터를 on으로 수신할 이벤트를 등록함
  socket.on('hello socket!', (res) => {
    // res: socket을 이용해 송신한 데이터를 수신
    console.log(res); // 터미널에 출력

    socket.emit('bye socket!', { msg: '안녕히 가세요~' });
  });

  socket.on('entry', (res) => {
    console.log(res);

    // io 객체를 이용해서 전체를 대상으로 공지(데이터 송신)
    io.emit('notice', { msg: `${socket.id}님이 입장하였습니다.` });
  });
});

// app.listen이 아닌 server.listen!
server.listen(PORT, function () {
  console.log(`server open: ${PORT}`);
});
