//모듈!!
//index.js가 전체 mvc흐름에서 router역할
//이 모듈의 역할
// 경로 선언과관련된 내용 기술
const express = require('express');
const controller = require('../controller/Cmain'); //router<-controller
const router = express.Router(); //Router객체를 router(객체)에 묶어서 module.exports=router로 내보냄
// 이 파일의 기본경로: localhost:PORT/user/

//GET localhost:PORT/
// router.get('/', (req, res) => {
//   res.render('index');
// }); //router 객체에 '/'주소 추가

// //GET localhost:PORT/comments
// router.get('/comments', (req, res) => {
//   res.render('comments', { comments: comments });
// }); //router 객체에 '/comments'주소 추가

// //GET localhost:PORT/comments/:id
// router.get('/comment/:id', (req, res) => {
//   //:id라고 된 부분에서 id가 마치 변수같은 역할을 하고 있다~
//   //req.params: 라우트 매개변수에 대한 정보가 담겨있음.
//   console.log(req.params); // locathost:8000/comment/1을 하면 콘솔창에 { id: '1' }찍힘 ->id는 문자열이니까 숫자로 바꿔야함
//   const cmtId = Number(req.params.id); //id값을 cmtId라는 변수에 저장을 하고
//   // 0, 7 같은 존재하지 않는 id로 접근시 404 페이지
//   //   if (cmtId < 1 || cmtId > comments.length) {
//   //     return res.render('404');
//   //   }
//   //   // :id 변수에 숫자가 아닌 문자가 온다면 404 페이지
//   //   if (isNaN(cmtId)) {
//   //     return res.render('404');
//   //   }
//   //-->위의 404에러처리를 한번에!!
//   if (!comments[cmtId - 1]) {
//     return res.render('404');
//   }
//   res.render('comment', { comment: comments[cmtId - 1] }); //db에 임시로 저장된 배열 comments를 comment라는 객체로 묶어서 comment.ejs에 전달!
// }); //router 객체에 '/comment/:id'주소 추가

// // (임시) DB로부터 받아온 댓글 목록
// const comments = [
//   {
//     id: 1,
//     userid: 'helloworld',
//     date: '2022-10-31',
//     comment: '안녕하세요^~^',
//   },
//   {
//     id: 2,
//     userid: 'happy',
//     date: '2022-11-01',
//     comment: '반가워유',
//   },
//   {
//     id: 3,
//     userid: 'lucky',
//     date: '2022-11-02',
//     comment: '오 신기하군',
//   },
//   {
//     id: 4,
//     userid: 'bestpart',
//     date: '2022-11-02',
//     comment: '첫 댓글입니당ㅎㅎ',
//   },
//   {
//     id: 5,
//     userid: 'apple',
//     date: '2022-11-02',
//     comment: '우와!!!!!',
//   },
// ];
router.get('/', controller.main);
router.get('/comments', controller.comments);
router.get('/comment/:id', controller.comment);

//module.exports 구문을 통해 router를 내보내야
// 다른 모듈(파일)에서 router 객체를 사용가능
module.exports = router;
