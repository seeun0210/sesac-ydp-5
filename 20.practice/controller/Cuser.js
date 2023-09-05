const { User } = require('../models');

const bcrypt = require('bcrypt');
const saltRounds = 12;
function hashPassword(password) {
  return bcrypt.hashSync(password, saltRounds);
}

exports.index = (req, res) => {
  // index.ejs 랜더 (data 키로 session 객체의 userInfo 전달)
  console.log(req.session.userInfo);
  const userSession = req.session.userInfo;
  if (userSession) {
    //index.ejs화면에서 환영합니다 할지
    res.render('index', { isLogin: true, data: userSession });
  } else {
    //로그인하지 않으셨군요 할지...
    res.render('index', { isLogin: false });
  }
};

exports.getRegister = (req, res) => {
  // register.ejs 랜더
  res.render('register');
};

exports.getLogin = (req, res) => {
  // login.ejs 랜더
  res.render('login');
};

exports.getUsers = async (req, res) => {
  // 세션에 userInfo 데이터가 있다면; 전체 유저를 찾음
  const result = await User.findALL();
  if (req.session.userInfo) {
    res.render('users', {
      username: req.session.userInfo.name,
      users: result,
    });
  } else {
    res.redirect('/login');
  }
  // 세션에 userInfo 데이터가 없다면; /login 경로로 리다이렉트
  // -> 즉, 해당 요청은 로그인한 사람만 전체 유저를 조회할 수 있음
};

exports.getProfile = async (req, res) => {
  const user = await User.findOne({
    where: { userid: req.session.userInfo.userid },
  });
  // 1. userInfo 세션에 저장된 id를 이용해 현재 로그인한 유저의 id 값으로 특정 유저 정보 하나를 조회
  res.render('profile', { data: user });
  // 2. profile.ejs 랜더 + data 키로 특정 유저를 찾은 결과를 넘김
};

exports.postRegister = async (req, res) => {
  // 회원가입 요청시 비밀번호는 암호화한 값으로 DB에 추가
  console.log('postRegister req.body', req.body);
  // 응답은 {result: true}
  const hashedPassword = hashPassword(req.body.pw);
  const insertUser = await User.create({
    // data: {
    //   userid: form.userid.value,
    //   pw: form.pw.value,
    //   name: form.name.value,
    // },ejs에서 이렇게 넘겨줌!!!
    userpw: hashedPassword,
    userid: req.body.userid,
    username: req.body.name,
  });
  res.send({ result: true });
};
//비교함수
function comparePassword(password, hashPassword) {
  return bcrypt.compareSync(password, hashPassword);
}
exports.postLogin = async (req, res) => {
  // Step1. 아이디를 찾아서 사용자 존재 유무 체크
  const isUser = await User.findeOne({
    where: { userid: req.body.userid },
  });
  // Step2. 입력된 비밀번호 암호화하여 기존 데이터와 비교
  // 2-1. 유저 있음
  if (isUser) {
    if (comparePassword(req.body.pw, isUser.userpw)) {
      req.session.userInfo = isUser;
      res.send({ result: true, data: req.session.userInfo });
    } else {
      res.send({ result: false, messeage: '틀린 비밀번호입니다' });
    }
  } else {
    res.send({ result: false, message: '존재하지 않는 아이디입니다' });
  }
  // 2-1-1. 비밀번호 일치;
  //    userInfo 키 값으로 세션 생성 (userInfo는 name키와 id 키를 갖는 "객체")
  //    응답 데이터: { result: true, data: step1에서 찾은 유저 }
  // 2-1-2. 비밀번호 불일치;
  //    응답 데이터; { result: false, message: '비밀번호가 틀렸습니다.'
  // 2-2. 유저 없음
  //    응답 데이터; { result: false, message: '존재하는 사용자가 없습니다' }
};

exports.patchProfile = async (req, res) => {
  // 사용자가 요청한 데이터를 변경
  await User.update(
    {
      username: req.body.name,
      pw: req.body.pw,
    },
    {
      where: { userid: req.body.userid },
    }
  );
  res.send({ result: true });
  // 응답 데이터; { result: true }
};

exports.deleteUser = async (req, res) => {
  const isDelete = await User.destroy({
    where: { userid: req.session.userInfo.userid },
  });
  // 1. 유저 삭제
  // 2. 세션 삭제
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
  res.send({ result: true });
};

// 비밀번호 암호화 함수 => (선택) 가능하다면 비밀번호 암호화와 관련된 별도의 모듈로 작성해보기! (utils/encrypt.js)

// TODO: 비밀번호를 해싱하는 함수 정의 (bcryptPassword)

// TODO:비밀번호와 원본 비번을를 비교하는 함수 (compareFunc)
