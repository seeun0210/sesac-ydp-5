const express = require('express');
const app = express();
const PORT = 8000;
app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static')); //동적파일 업로드를 위한 (클라이언트가 바로 확인할 수 있도록...)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/comments', (req, res) => {
  res.render('comments', { comments: comments });
});
app.get('/comment/:id', (req, res) => {
  //:id라고 된 부분에서 id가 마치 변수같은 역할을 하고 있다~
  //req.params: 라우트 매개변수에 대한 정보가 담겨있음.
  console.log(req.params); // locathost:8000/comment/1을 하면 콘솔창에 { id: '1' }찍힘 ->id는 문자열이니까 숫자로 바꿔야함
  const cmtId = Number(req.params.id); //id값을 cmtId라는 변수에 저장을 하고
  // 0, 7 같은 존재하지 않는 id로 접근시 404 페이지
  //   if (cmtId < 1 || cmtId > comments.length) {
  //     return res.render('404');
  //   }
  //   // :id 변수에 숫자가 아닌 문자가 온다면 404 페이지
  //   if (isNaN(cmtId)) {
  //     return res.render('404');
  //   }
  //-->위의 404에러처리를 한번에!!
  if (!comments[cmtId - 1]) {
    return res.render('404');
  }
  res.render('comment', { comment: comments[cmtId - 1] }); //db에 임시로 저장된 배열 comments를 comment라는 객체로 묶어서 comment.ejs에 전달!
});
// param 여러개 사용 가능
app.get('/test/:id/:name', (req, res) => {
  //localhost:8000/test/banana/바나나라고 하면
  console.log('req.params', req.params); //req.params { id: 'banana', name: '바나나' }
  res.send('test req success!');
});

//404 error 처리
//반드시 맨 마지막 라우트로 선언해야함(앞의 라우트들이 아닌경우를 의미하기 떄문에~~~)
app.get('*', (req, res) => {
  res.render('404');
});
app.listen(PORT, () => {
  console.log(`${PORT} is opening!`);
});
// (임시) DB로부터 받아온 댓글 목록
const comments = [
  {
    id: 1,
    userid: 'helloworld',
    date: '2022-10-31',
    comment: '안녕하세요^~^',
  },
  {
    id: 2,
    userid: 'happy',
    date: '2022-11-01',
    comment: '반가워유',
  },
  {
    id: 3,
    userid: 'lucky',
    date: '2022-11-02',
    comment: '오 신기하군',
  },
  {
    id: 4,
    userid: 'bestpart',
    date: '2022-11-02',
    comment: '첫 댓글입니당ㅎㅎ',
  },
  {
    id: 5,
    userid: 'apple',
    date: '2022-11-02',
    comment: '우와!!!!!',
  },
];
