//visitor 모델 정의
const Visitor = (Sequelize, DataTypes) => {
  //Sequelize:models/index.js에서 sequelize
  //DataTypes:models/index.js에서 Sequelize
  const model = Sequelize.define(
    'visitor',
    {
      //id int not null primary key auto_increment,
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      //name varchar(10) not null,
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },

      comment: {
        //comment MEDIUMTEXT
        type: DataTypes.TEXT('medium'),
      },
    },
    {
      tableName: 'visitor', //실제 DB 테이블 명
      freezeTableName: true, //테이블명 고정(모델 이름 테이블로 바꿀 떄 복수형으로 바뀜)
      timestamps: true,
    }
  );

  return model;
};
module.exports = Visitor;
