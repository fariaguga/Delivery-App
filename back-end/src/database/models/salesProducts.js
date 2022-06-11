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
    modelName: 'SalesProducts',
    tableName: 'sales_products',
    timestamps: false,
  }
);

Product.hasMany(Sale, { foreignKey: 'id', as: 'sale' });
Sale.hasMany(Product, { foreignKey: 'id', as:'product' });

SalesProducts.belongsTo(Product, { foreignKey: 'productId', as: 'product'});
SalesProducts.belongsTo(Sale, { foreignKey: 'saleId', as: 'sale'});

Product.hasMany(SalesProducts, { foreignKey: 'productId', as: 'product'});
Sale.hasMany(SalesProducts, { foreignKey: 'saleId', as: 'sale'});

Product.belongsToMany(Sale, { through: SalesProducts, foreignKey: 'productId', as: 'sales' });
Sale.belongsToMany(Product, { through: SalesProducts, foreignKey: 'saleId', as: 'products' });

module.exports = SalesProducts;
