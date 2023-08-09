//http모듈로 웹 서버 생성

//클라이언트가 localhost:PORT번호로 요청(request=req)을 했으나 서버가 응답(response=(res))하고 있는 내용이 없음. 그래서 주소창에 localhost:8000을 해도 빙글빙글돌기만 하고 아무것도 실행되지 않는거임
const http = require('http');
//fs(file system)파일 관련 내장 모듈
const fs = require('fs');
const server = http.createServer(function (req, res) {
  /*
  res.writeHead(200, { 'content-type': 'text/html;charset=utf8' }); //응답 헤더??
  res.write('<h1>Hello, Node.js!</h1>'); //응답 본문
  res.end('<p>My first, Node server!우와ㅏㅏㅏ</p>'); //응답 본문 작성 후에 응답 종료 //한글이 포함되어 있다면 writeHead에서 encoding을 해주어야 함
*/
  try {
    // html 파일 불러오기
    const data = fs.readFileSync('./index2.html');
    res.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    res.write(data);
    res.end();
  } catch (error) {
    //퀴즈 :404.html만들어서 해당 html을 응답으로 보내도록 코드 수정
    const errorData = fs.readFileSync('./404.html');
    res.writeHead(404, { 'content-type': 'text/html; charset=utf8' });
    res.write(errorData);
    res.end();
  }
}); //서버를 하나 생성

const PORT = 8000;

//클라이언트 요청=request 이벤트
//connection이벤트: 클라이언트가 접속(클라이언트와 서버가 연결되었을 때)발생
server.on('connection', function (req, res) {
  console.log('connection 이벤트 발생!!');
});
//서버 실행
server.listen(PORT, function () {
  //클라이언트가 이 포트번호로 들어오면 이 function()을 실행하겠다
  console.log(`server listening on ${PORT} port`);
});

//10초 후 서버 종료
/*
setTimeout(function () {
  console.log('10초가 지나 서버가 종료되었습니다');
  server.close(); //서버 종료 메서드
}, 10000);
*/
