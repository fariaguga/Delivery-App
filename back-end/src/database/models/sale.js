const { DataTypes, Model } = require('sequelize');
const db = require('.');
const Product = require('./product');
const User = require('./user');

class Sale extends Model {}

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
    modelName: 'Sale',
    tableName: 'sales',
    timestamps: false,
  }
);

Sale.belongsTo(User, { foreignKey: 'userId' });
Sale.belongsTo(User, { foreignKey: 'sellerId' });

User.hasMany(Sale, { foreignKey: 'userId' });
User.hasMany(Sale, { foreignKey: 'sellerId' });

module.exports = Sale;
