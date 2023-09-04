const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8080;
app.set("view engine", "ejs");
//세션 미들웨어 등록
app.use(
  session({
    secret: "MySessionSecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 60 * 1000, //1m
    },
  })
);
// 세션 옵션 객체
// secret : 안전하게 쿠키를 전송하기 위한 쿠키 서명 값
// resave: 세션에 수정사항이 생기지 않더라도 매 요청(req)마다 세션을 다시 저장할 것
// saveUninitialized:세션에 저장할 내역이 없더라도 처음부터 세션을 ㅈ생성할 지 설정
//httpOnly:http프로토콜에서도 세션 사용 가능
//maxAge:쿠키 수명(단위ms)
app.get("/", (req, res) => {
  res.render("session");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
//세션 설정..
app.get("/set", (req, res) => {
  req.session.name = "홍길동"; //요청에 세션에 name이라는 키에 들어앖는 값을 홍길동이라 저장하고 싶다. {name:'홍길동'}

  res.send("세션 설정 완료");
});
//세션 확인 (이런식으로 로그인 한 사람이 누구인지 서버에 계속 알려주어야 함)
app.get("/name", (req, res) => {
  console.log(req.session);
  res.send({ id: req.sessionID, name: req.session.name });
});

app.get("/destroy", (req, res) => {
  //destroy는 콜백을 받는 메서드
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      return;
    }
    //res.redirect('주소'):주소로 이동(리다이렉트) 즉, 응답 자체를 어딘가로 이동 시켜버리는 것
    //res.render는 ejs를 그려주는 메서드

    res.redirect("/name"); //세션 확인
    //세션이 삭제되면 바로 경로가 http://localhost:8080/name주소로 가도록 설정함

    //네임은 사라졌는데 왜 아이디는 사라지지 않았지??
    //id라는 객체는 res.send할 때 app.get('/name')할때 내가 만들어서보낸 data임
    //그래서 설정하고 삭제해서 들어가는 name경로와 그냥 설정하고 확인하는 name경로의 id값이 다른 걸 확인해 볼 수 있음
  });
});

//세션 정리
//1. 세션 설정
//req.session.키=값

//2. 세션 사용
//req.session.키

//3.세션 삭제
//req.session.destroy(err,콜백)
