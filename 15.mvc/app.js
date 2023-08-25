const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static')); //동적파일 업로드를 위한 (클라이언트가 바로 확인할 수 있도록...)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//locathost:PORT로 express 앱이 실행!!
const indexRouter = require('./routes/index');
// indexRouter에서는 localhost:PORT/가 기본경로가 되는거임
app.use('/', indexRouter);
//404 error 처리
//반드시 맨 마지막 라우트로 선언해야함(앞의 라우트들이 아닌경우를 의미하기 떄문에~~~)
app.get('*', (req, res) => {
  res.render('404');
});
app.listen(PORT, () => {
  console.log(`${PORT} is opening!`);
});
