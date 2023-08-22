const express = require('express');
const app = express();
const PORT = 8000;

// TODO: multer 관련 설정
const multer = require('multer');
const path = require('path');
const upload = multer({
  dest: 'uploads/',
});
//multer 세부 설정
const uploadDetail = multer({
  //storage:저장할 공간에 대한 정보
  storage: multer.diskStorage({
    destination(req, file, done) {
      //done: callback함수
      //done(null,xx)여기에서 null은 error를 의미하는 매개변수!
      //에러가 없으므로 "null"이라고 전달하여 콜백함수를 호출!
      done(null, 'uploads/'); //파일을 업로드 할 경로를 설정
    },
    filename(req, file, done) {
      //두번째 인자로 파일!!!!!
      const ext = path.extname(file.originalname); //extname():파일"확장자"를 추출
      done(null, path.basename(file.originalname, ext) + Date.now() + ext); //basename():원본 파일에서 확장자를 제외한 파일 이름만 추출
      //파일이름+날짜+확장자
      //날짜를 추가해서(Date.now()) 파일이름을 저장하는 이유는??
      //1. 파일 이름 중복을 막기 위해서
      //2. 파일 이름만 보고 파일이 저장된 시점 유추 가능
    },
  }),
  //limits:파일 제한 정보
  limits: { fileSize: 5 * 1024 * 1024 }, //5MB로 파일 크기를 제한,
});
app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: static 미들웨어 설정
// 1. uploads/ 폴더 접근 가능하도록
app.use('/uploads', express.static(__dirname + '/uploads'));
// 2. static/ 폴더 접근 가능하도록
app.use('/static', express.static(__dirname + '/static'));
// TODO: 라우터 정의
// 1. GET /: index.ejs render
app.get('/', (req, res) => {
  res.render('index');
});
// 2. POST /result: result.ejs render
app.post('/postForm', uploadDetail.single('userfile'), (req, res) => {
  console.log(req.file);
  console.log(req.body, typeof req.body);
  res.render('result', {
    userInfo: req.body,
    src: req.file.path,
  });
  console.log(userInfo);
  console.log(src);
});

/*
  {
    fieldname: 'userfile',//폼에 정의한 name 값
    originalname: '20160404_161158.jpg',//원본 파일 명
    encoding: '7bit',//파일 인코딩 타입
    mimetype: 'image/jpeg',//파일 타입
    destination: 'uploads/',//파일 저장 경로
    filename: '301b3878eed18d2905357fbccdf1300f',//destination 저장된 파일명
    path: 'uploads\\301b3878eed18d2905357fbccdf1300f',//업로드된 파일 전체 경로
    size: 2731959//파일 크기
  }
  */

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
