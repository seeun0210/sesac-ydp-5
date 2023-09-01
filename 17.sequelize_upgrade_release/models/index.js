'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// TODO: 모델 모듈 불러오기
const Player = require('./Player')(sequelize, Sequelize);
const Profile = require('./Profile')(sequelize, Sequelize);
const Team = require('./Team')(sequelize, Sequelize);

//세개의 테이블을 불러왔기 때문에 db를 불러오기전에 관계를 형성해야함
// TODO: 관계 형성
// 1) Player : Profile = 1 : 1
// 한 선수 당 하나의 프로필을 가짐==>hasOne
Player.hasOne(Profile, {
  foreignKey: 'player_id',
  sourceKey: 'player_id', //sourceKey, targetKey 따로 지정 안하면 컴터에서 마음대로 fk이름 지어버림..지정해주는 거임
  onDelete: 'CASCADE', //연쇄 삭제
  onUpdate: 'CASCADE', //연쇄 수정
}); //onDelete를 하면 연속으로 Delete를 하겠다.
Profile.belongsTo(Player, {
  foreignKey: 'player_id',
  targetKey: 'player_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
// 2) Team : Player = 1 : N
// 한 팀에는 여러 선수가 존재==> hasMany
// TODO: 관계 정의한 모델들을 db 객체에 저장
Team.hasMany(Player, {
  foreignKey: 'team_id',
  sourceKey: 'team_id',
});
Player.belongsTo(Team, { foreignKey: 'team_id', targetKey: 'team_id' });
db.Player = Player;
db.Profile = Profile;
db.Team = Team;
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
