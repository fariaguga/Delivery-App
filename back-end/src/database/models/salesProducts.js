const { DataTypes, Model } = require('sequelize');
const db = require('.');
const Sale = require('./sale');
const Product = require('./product');

module.exports = () => {
  class SalesProducts extends Model {
    saleId;
    productId;
    quantity;
  }

  SalesProducts.init(
    {
      saleId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      productId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
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

  return SalesProducts;
};
