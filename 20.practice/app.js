const express = require('express');
const dotenv = require('dotenv');
const session = require('express-session');
dotenv.config();

const app = express();
const db = require('./models');
const PORT = process.env.PORT;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: express-session 미들웨어 등록
app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 60 * 1000, //1m
    },
  })
);
// TODO: routes/user 요청 경로 분리
const indexRouter = require('./routes/user');
app.use('/', indexRouter);

// TODO: 404 처리
app.get('*', (req, res) => {
  res.render('404');
});

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
