const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const PORT = 8000;

const io = require('socket.io')(server);

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('clientEx');
});

io.on('connection', (socket) => {
  socket.on('hello', (res) => {
    console.log(res);

    socket.emit('hello2', { msg: '안녕!' });
  });

  socket.on('study', (res) => {
    console.log(res);

    socket.emit('study2', { msg: '소켓 공부중...' });
  });

  socket.on('bye', (res) => {
    console.log(res);

    socket.emit('bye2', { msg: '안녕히가세여' });
    io.emit('notice', { msg: `${socket.id}님이 입장하였습니다.` });
  });
});

server.listen(PORT, function () {
  console.log(`server open: ${PORT}`);
});
