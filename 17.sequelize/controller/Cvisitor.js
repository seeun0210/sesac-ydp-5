//옜날 코드..//const Visitor = require('../model/Visitor');

//const models = require('../models'); //../models/index.js
//db={sequelize,Sequelize, Visitor:모델(테이블)}이게 불러와짐
//구조분해로 꺼내오기..
const { Visitor } = require('../models');

exports.main = (req, res) => {
  res.render('index');
};
//read all
exports.getVisitors = async (req, res) => {
  // [before]
  // res.render('visitor', { data: Visitor.getVisitors() });

  // [after-> before]
  // console.log(Visitor.getVisitors())
  // Visitor.getVisitors((result) => {
  //   console.log('controller >>', result);
  //   res.render('visitor', { data: result });
  // });

  //[after]
  //여기서 Visitor는 객체구조분해한거
  const result = await Visitor.findAll();
  console.log(result);
  res.render('visitor', { data: result });
};
//create
exports.postVisitor = async (req, res) => {
  //[before]
  // console.log(req.body); // { name: xx, comment: yy }
  // const { name, comment } = req.body;

  // Visitor.postVisitor(req.body, (insertId) => {
  //   console.log('controller >> ', insertId);
  //   res.send({ id: insertId, name: name, comment: comment });
  // });

  //[after]
  const { name, comment } = req.body;
  const result = await Visitor.create({
    name,
    comment,
  });
  // console.log(result);//visitor라는 객체가 result로 찍히게 됨(==insert한 데이터 값==create메서드가 실행된 결과)

  res.send('임시응답!');
};
//delete
exports.deleteVisitor = async (req, res) => {
  //[before]
  // console.log(req.body); // { id: xx }
  // const { id } = req.body;

  // Visitor.deleteVisitor(id, (result) => {
  //   console.log('controller >>', result); // true
  //   res.send(result); // res.send(true)
  //});

  //[after]
  const { id } = req.body;
  const result = await Visitor.destroy({
    where: { id: id },
  });
  console.log(result); //result는 destroy한 결과
  res.send(true); //삭제나 수정에서 응답방식이 true나 false 값을 던지기도 하고 , 바뀐 값을 던져주기도 하는데 여기에서 result를 넘겨주게되면 front js에서 처리할 값이 없기 떄문에 에러가 뜨게 된다.
  //그래서 삭제 성공을 의미하는 true값을 보내면 된다.
};

//read one
exports.getVisitor = async (req, res) => {
  //[before]
  // // GET/visitor?id=5 --> 컨트롤러에서는 req.query(쿼리 스트링 썼을 떄)
  // // GET/visitor/:id-->컨트롤러에서는 req.params(param썼을 떄)
  // console.log(req.params); //{id:'5'}//id가 문자열 형태로 넘어오네...--> 숫자로 바꿔야할듯?database에서 id값 숫자형태임
  // // console.log(req.query); //컨트롤러에서 param썼으니까~
  // const { id } = req.params;
  // Visitor.getVisitor(id, (result) => {
  //   console.log(result);
  //   //[ RowDataPacket { id: 6, name: 'ㅇㅁㅇㄹ', comment: 'ㅁㄴㅇㄹ' } ]배열안에 객체 하나가...
  //   //그런데 row[0]으로 넘겨줬으니까
  //   //result는 모델의 getVisitor callback의 인자 (rows[0])이다!!
  //   res.send(result);
  // });

  //[after]
  const { id } = req.params;
  const result = await Visitor.findOne({
    where: { id: id },
  });
  console.log(result);
  res.send(result);
};
//update
exports.updateVisitor = async (req, res) => {
  //[before]
  // console.log(req.body); //{id:x, name:x, comment:x}
  // Visitor.updateVisitor(req.body, (result) => {
  //   console.log(result);
  //   res.send({ isUpdated: true });
  // }); //수정되어야 할 데이터가 req.body에 들어있음

  //[after]
  //.update({변경될 값},{where절})
  await Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: { id: req.body.id },
    }
  );
  res.send({ isUpdated: true });
};
