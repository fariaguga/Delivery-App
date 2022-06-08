const { DataTypes, Model } = require('sequelize');
const db = require('.');
const User = require('./user');

const UserModel = User();

module.exports = () => {
  class Sale extends Model {
  
  }

  Sale.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      sellerId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      totalPrice: {
        allowNull: false,
        type: DataTypes.DECIMAL(9, 2),
      },
      deliveryAddress: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      deliveryNumber: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      saleDate: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      underscored: true,
      sequelize: db,
      modelName: 'sales',
      timestamps: false,
    }
  );

  Sale.belongsTo(UserModel, { foreignKey: 'userId' });
  Sale.belongsTo(UserModel, { foreignKey: 'sellerId' });

  UserModel.hasMany(Sale, { foreignKey: 'userId' });
  UserModel.hasMany(Sale, { foreignKey: 'sellerId' });

  return Sale;
};
