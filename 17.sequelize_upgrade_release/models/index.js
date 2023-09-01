'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

// TODO: 모델 모듈 불러오기


// TODO: 관계 형성
// 1) Player : Profile = 1 : 1
// 한 선수 당 하나의 프로필을 가짐

// 2) Team : Player = 1 : N
// 한 팀에는 여러 선수가 존재

// TODO: 관계 정의한 모델들을 db 객체에 저장

module.exports = db;
