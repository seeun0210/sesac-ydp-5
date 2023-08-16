//app.js에 변경사항 생기면 포트 node 껐다 켜야함
const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('/views', 'views');
//미들웨어(middleware)
//:요청(request)와 응답(response)의 중간에서 작업하는 코드
//app.use()

//req.body객체를 해석할 수 있도록 body-parser 미들웨어 등록 //바로 쓸 수 있는 이유는 4.xx부터 express내장되었기 때문~
app.use(express.urlencoded({ extended: true })); //post요청으로 들어오는 모든 형식의 데이터를 파싱(해석,분해)
app.use(express.json()); //json형식으로 데이터를 주고 받음

//라우팅(Routing)-주소 설정
//  -[요청방식(get, post,..)+요청경로]세트가 겹치면 안됨!
//  -GET/hello,POST/hello->ㄱㅊ

//  -POST/banana,POST/banana->x
//라우트(Route):주소
//GET '/'=>index.ejs를 보여줌
//get 방식은 클라이언트에서 보낸 데이터가 req.query에 저장
app.get('/', (req, res) => {
  //console.log(req.query); //{}:빈 객체
  //res.render(ejs경로, 데이터)
  //ejs_경로: views/폴더 내부 ejs 파일의 주소
  //데이터: 뷰에 넣어줄 정보
  res.render('main', { title: '실습문제풀이' });
});
app.get('/practice1', (req, res) => {
  res.render('practice1');
});
app.get('/practice2', (req, res) => {
  res.render('practice2');
});
app.get('/result1', (req, res) => {
  res.render('result');
});
app.post('/result2', (req, res) => {
  res.render('result');
});
/*
app.get('/', (req, res) => {
  //console.log(req.query); //{}:빈 객체
  //res.render(ejs경로, 데이터)
  //ejs_경로: views/폴더 내부 ejs 파일의 주소
  //데이터: 뷰에 넣어줄 정보
  res.render('main', { title: '실습문제풀이' });
});
*/ //->이렇게 쓰면 위에 app.get과 '/'이랑 'main'이 겹쳐서 안된다...
app.get('/result1', (req, res) => {
  console.log(req.query);
  res.render('result', { user: req.query });
  // get방식으로 받은 데이터를 user라는 객체로 묶어서 사용할 수 있다.
});
app.post('/result2', (req, res) => {
  console.log(req.body);
  res.render('result', { user: req.body });
});

app.listen(PORT, () => {
  console.log(`${PORT} is opening!`);
});
