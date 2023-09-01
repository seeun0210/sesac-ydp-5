const playerModel = (sequelize, DataTypes) => {
  const Player = sequelize.define('Player', {
    player_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(63),
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    freezeTableName: true
  });
  return Player;
};

module.exports = playerModel;