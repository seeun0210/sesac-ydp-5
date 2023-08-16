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
//GET '/'=>index.ejs를 보여줌
//get 방식은 클라이언트에서 보낸 데이터가 req.query에 저장
app.get('/', (req, res) => {
  console.log(req.query); //{}:빈 객체
  //res.render(ejs경로, 데이터)
  //ejs_경로: views/폴더 내부 ejs 파일의 주소
  //데이터: 뷰에 넣어줄 정보
  res.render('index', { title: '폼 전송을 연습해보자!' });
});

//POST '/postForm'=>임의의 메시지 전송
//post 방식은 클라이언트에서 보낸 데이터가 req.body에 저장
app.post('/postForm', (req, res) => {
  console.log(req.body); //f12->network->postForm->payload에서 확인가능
  //res.send('post 요청 성공!');
  res.render('result', { title: 'POST요청', userInfo: req.body });
});
app.listen(PORT, () => {
  console.log(`${PORT} is opening!`);
});
