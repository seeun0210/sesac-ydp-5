'use strict'; //엄격모드--> 디버깅이 쉬워진다...

//sequelize 모듈 호출해서 Sequelize변수에 저장
const Sequelize = require('sequelize'); //sequelize 패키지를 불러와서 Sequelize변수에 저장함
//config.json 파일을 불러와서 development 환경의 db설정
//config:db접근 가능한 설정값저장
const config = require(__dirname + '/../config/config.json')['development']; //현재위치에서 한단계 올라가서 config폴더의 json파일을 읽어오고
//빈 db객체 생성
const db = {};
//Sequelize객체 생성해서 sequelize 변수에 저장
const sequelize = new Sequelize( //config에서 불러온 거
  config.database, //sesac
  config.username, //user
  config.password, //1234
  config //{}
);
//db={sequelize: sequelize, Sequelize:Sequelize}
db.sequelize = sequelize;
db.Sequelize = Sequelize;
//!! models/폴더에 정의되는 model(테이블)은 db객체에 저장해서 쓸 수 있도록 할거다.
//db={sequelize,Sequelize, Visitor:모델(테이블)}
db.Visitor = require('./Visitor')(sequelize, Sequelize);
//db객체 내보냄(모듈화 내보냄... 다른 곳에서 db객체 사용 가능)
module.exports = db; //db={sequelize,Sequelize, Visitor:모델(테이블)}
