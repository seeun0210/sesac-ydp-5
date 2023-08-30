const express = require('express');
const app = express();
const PORT = 8004;
const db = require('./models'); // ./models/index.js

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.get('*', (req, res) => {
  res.render('404');
});
db.sequelize.sync({ force: false }).then(() => {
  //force:false; 실제 데이터 베이스에 테이블이 존재하지 않으면 모델에 정의한대로 생성
  //force:true; 데이터 베이스에 테이블 있어도 무조건 생성-->잘 안씀
});
app.listen(PORT, () => {
  console.log(`${PORT} is opening!`);
});
