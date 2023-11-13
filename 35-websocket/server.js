const ws = require('ws');
const express = require('express');
const app = express();
const PORT = 8000;
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('client');
});

const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

const wss = new ws.Server({ server });
const sockets = [];

wss.on('connection', (socket) => {
  console.log('클라이언트가 연결되었습니다.');
  sockets.push(socket); //배열에 접속한 클라이언트 객체 추가
  //   클라이언트의 메시지 수신
  socket.on('message', (message) => {
    console.log(`클라이언트로부터 받은 메시지:${message}`);
    // socket.send(`서버에서 받은 메시지:${message}`);

    sockets.forEach((socket) => {
      socket.send(`${message}`);
    });
  });
  socket.on('error', (error) => {
    console.error('오류가 발생했습니다:', error);
  });

  socket.on('close', () => {
    console.log('클라이언트와 연결이 종료되었습니다.');
  });
});
