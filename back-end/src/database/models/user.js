const { DataTypes, Model } = require('sequelize');
const db = require('.');

module.exports = () => {
  class User extends Model {}

  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize: db,
      modelName: 'User',
      tableName: 'users',
      timestamps: false,
    }
  );

  return User;
};
