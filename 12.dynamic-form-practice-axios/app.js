const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
  res.render('dynamic', {});
});

app.post('/axios', (req, res) => {
  const realID = 'banana';
  const realPW = '1234';
  console.log(req.body);
  if (realID === req.body.id) {
    res.send({ loginResult: 'success' });
  } else {
    res.send({ loginResult: 'fail' });
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} is opening!`);
});
