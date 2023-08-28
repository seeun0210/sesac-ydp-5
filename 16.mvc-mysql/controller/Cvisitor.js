const Visitor = require('../model/Visitor');

exports.main = (req, res) => {
  res.render('index');
};

exports.getVisitors = (req, res) => {
  //[db불러오기 전 before]
  //res.render('visitor', { data: Visitor.getVisitors() });

  //[after]
  // console.log(Visitor.getVisitors());//여기에서 callback..어쩌구 오류
  Visitor.getVisitors((result) => {
    //model의 Visitor파일에서 내보낸 getVisitors함수의 callback 함수의 결과를 result(Visitor파일의 rows에 해당?)
    console.log('controller >>', result);
    res.render('visitor', { data: result }); //visiter.ejs에 result(model/Visitor)를 data라는 객체로 묶어서 보내겠다??
  });
};

exports.postVisitor = (req, res) => {
  console.log(req.body);
  //예상 {name: xx, comment: yy}
  const { name, comment } = req.body;
  Visitor.postVisitor(req.body, (insertId) => {
    console.log('controller>>', insertId);
    res.send({ id: insertId, name: name, comment: comment }); //프론트로 보낼 데이터
  });
};
