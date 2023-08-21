const express = require('express');
const app = express();
const PORT = 8000;

//multer관련 설정
const multer = require('multer');
const path = require('path'); //경로에 관한 내장모듈
const upload = multer({
  dest: 'uploads/', //dest: 클라이언트가 업로드한 파일을 저장할 서버측 경로
}); //파일이 추가되면 uploads랴는 폴더가 생성되고 그 안에 업로드한 파일이 추가됨
//multer 세부 설정
const uploadDetail = multer({
  //storage:저장할 공간에 대한 정보
  storage: multer.diskStorage({
    destination(req, file, done) {
      //done: callback함수
      done(null, 'uploads/'); //파일을 업로드 할 경로를 설정
    },
    filename(req, file, done) {
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

app.get('/', (req, res) => {
  res.render('index');
});
//1. single():하나의 파일을 업로드
//upload.single('userfile'): 클라이언트의 요청이 들어오면 multer설정(upload변수)에 따라 파일을 업로드 한 후, req.file 객체를 생성
//single() 인자는 input 태그의 name 속성과 일치시켜야함
app.post('/upload', uploadDetail.single('userfile'), (req, res) => {
  res.send('파일 업로드 완료!');
  //req.file:파일 업로드 정보
  //req.body: 파일 외의 정보들
  console.log(req.file);
  //req.file 객체 자세히 보기
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
  console.log('------------');
  console.log(req.body);
});
app.listen(PORT, () => {
  console.log(`${PORT} is opening!`);
});
