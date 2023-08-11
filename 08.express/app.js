const express = require('express'); //express모듈을 설치한 것을 불러와서 express변수에 저장함
const app = express(); //express함수를 app이라는 변수에 저장함
const PORT = 8080; //포트를 8080

//ejs를 쓸 것임을 명시해줌
//express에게 템플릿 엔진
app.set('view engine', 'ejs'); //express에서 사용할 템플릿 엔진 종류(ejs) 등록
app.set('views', './views'); //템플릿 엔진  파일을 저장할 위치 등록
//fs모듈을 이용해서 불러올 필요가 없음

//(임시)데이터 베이스에서  가져온 회원정보(id, pw)
const idFromDB = 'banana';
const pwFromDB = '1234qwer';

//get은 두가지 인자를 가짐 app.get(경로,해당경로롤 들어왔을 떄 실행할 함수)
//'/'의 의미: 서버 주소의 포트번호 (localhost:8080/)이렇개 슬래쉬 하나만 있는 걸 루트경로라고함
//첫번째는 경로
//두번째는 해당 경로로 들어왔을 때 실행할 콜백 함수
app.get('/', function (request, response) {
  //response.send('x'):x를 클라이언트한테 응답으로 보냄
  //response.send('<h1>Hello!Express!!</h1>'); //send안에 있는 메세지를 보내줌

  //response.render(ejs_filename):ejs file 이름을 찾아서 응답
  response.render('index', {
    userId: idFromDB,
    userPw: pwFromDB,
    btns: ['버튼1', '버튼2', '버튼3'], //btns라는 key를 갖는 배열
    me: {
      name: 'seeun',
      msg: '저는 김세은입니다. 반갑습니다!',
    },
    isLogin: true,
  });
  //response.render('index'); //views파일에서 index라는 이름을 가진 파일을 찾아서 응답
});

//'/sesac' 경로로 들어왔을 때 "새싹 영등포 캠퍼스 5기 수업중" 메시지 보이기
app.get('/sesac', function (request, response) {
  response.send('<h1>새싹 영등포 캠퍼스 5기 수업중</h1>'); //send안에 있는 메세지를 보내줌
  //
});

//서버가 실행할 PORT 지정하고, 실행했을 떄 콘솔로그를 찍음
app.listen(PORT, function () {
  console.log(`server listening on ${PORT} port`);
});

//퀴즈
//1. /login 경로로 요청이 들어오면 로그임 페이지(ejs)를 응답
app.get('/login', function (req, res) {
  res.render('login');
});
//2. /register 경로롤 요청이 들어오면 회원가입 페이지(ejs)를 응답
app.get('/register', function (req, res) {
  res.render('register');
});
