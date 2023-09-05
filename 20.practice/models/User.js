// TODO: User 모델 정의
const User = (Sequelize, DataTypes) => {
  const model = Sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userid: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      userpw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      tableName: 'user',
      freezeTableName: true,
      timestamps: true,
    }
  );
  return model;
};
module.exports = User;
