// exports.getVisitors = () => {
//   return [
//     { id: 1, name: '홍길동', comment: '내가 왔다.' },
//     { id: 2, name: '이찬혁', comment: '으라차차' },
//   ];
// };
const mysql = require('mysql');
// db연결 설정
const conn = mysql.createConnection({
  host: 'localhost',
  //user: 'root',//root계정은 비밀번호 접근을 허용하지 않아서 이렇게만 하면 에러가 뜬다...--> 해결방법: 새로운 사용자를 만들고 그 사용자로 접근해야한다.
  user: 'user', //mysql에서 ddl을 사용해서 user라는 사용자를 추가하고, dcl을 통해서 user에 권한을 부여한다..
  password: '1234',
  database: 'sesac',
});
exports.getVisitors = (callback) => {
  conn.query(`select * from visitor`, (err, rows) => {
    //`select * from visitor`:webserver에서 database로 query를 날리는 것!!
    //visitor의 모든 행을 선택해서
    if (err) {
      throw err; //에러가 뜨면 에러를 던지고
    }
    console.log('model>>', rows);
    callback(rows); //아니면 rows를 넘긴다(database에서 webserver로 응답하는데 그게 rows라는 말임)
  });
};
exports.postVisitor = (data, callback) => {
  //매개변수
  //data:프론트엔드에서 유저가 입력한 값(req.body)
  //callback:query실행 후 호출할 함수
  conn.query(
    `insert into visitor values(null, "${data.name}","${data.comment}")`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      console.log('model>>', rows);
      callback(rows.insertId);
    }
  );
};
exports.deleteVisitor = (id, callback) => {
  console.log('model>>', id);
  conn.query(`delete from visitor where id=${id}`, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log('model>>', rows);
    callback(true); //{id :id}로 삭제한 아이디를 보내는 경우도 있음...여기서는 삭제성공했다는 의미에서 true라는 불리언 값을 넘김
  });
};
