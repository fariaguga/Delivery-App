const { DataTypes, Model } = require('sequelize');
const db = require('.');
const Sale = require('./sale');
const Product = require('./product');

class SalesProducts extends Model {}

SalesProducts.init(
  {
    saleId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: Sale,
        key: 'id',
      },
    },
    productId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: 'id',
      },
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'salesProducts',
    timestamps: false,
  }
);

SalesProducts.belongsTo(Sale, { foreignKey: 'saleId' });
SalesProducts.belongsTo(Product, { foreignKey: 'productId' });

Sale.hasMany(SalesProducts, { foreignKey: 'saleId' });
Product.hasMany(SalesProducts, { foreignKey: 'productId' });

module.exports = SalesProducts;
