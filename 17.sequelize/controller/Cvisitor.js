const Visitor = require('../model/Visitor');

exports.main = (req, res) => {
  res.render('index');
};

exports.getVisitors = (req, res) => {
  // [before]
  // res.render('visitor', { data: Visitor.getVisitors() });

  // [after]
  // console.log(Visitor.getVisitors())
  Visitor.getVisitors((result) => {
    console.log('controller >>', result);
    res.render('visitor', { data: result });
  });
};

exports.postVisitor = (req, res) => {
  console.log(req.body); // { name: xx, comment: yy }
  const { name, comment } = req.body;

  Visitor.postVisitor(req.body, (insertId) => {
    console.log('controller >> ', insertId);
    res.send({ id: insertId, name: name, comment: comment });
  });
};

exports.deleteVisitor = (req, res) => {
  console.log(req.body); // { id: xx }
  const { id } = req.body;

  Visitor.deleteVisitor(id, (result) => {
    console.log('controller >>', result); // true
    res.send(result); // res.send(true)
  });
};
exports.getVisitor = (req, res) => {
  // GET/visitor?id=5 --> 컨트롤러에서는 req.query(쿼리 스트링 썼을 떄)
  // GET/visitor/:id-->컨트롤러에서는 req.params(param썼을 떄)
  console.log(req.params); //{id:'5'}//id가 문자열 형태로 넘어오네...--> 숫자로 바꿔야할듯?database에서 id값 숫자형태임
  // console.log(req.query); //컨트롤러에서 param썼으니까~
  const { id } = req.params;
  Visitor.getVisitor(id, (result) => {
    console.log(result);
    //[ RowDataPacket { id: 6, name: 'ㅇㅁㅇㄹ', comment: 'ㅁㄴㅇㄹ' } ]배열안에 객체 하나가...
    //그런데 row[0]으로 넘겨줬으니까
    //result는 모델의 getVisitor callback의 인자 (rows[0])이다!!
    res.send(result);
  });
};
exports.updateVisitor = (req, res) => {
  console.log(req.body); //{id:x, name:x, comment:x}
  Visitor.updateVisitor(req.body, (result) => {
    console.log(result);
    res.send({ isUpdated: true });
  }); //수정되어야 할 데이터가 req.body에 들어있음
};
