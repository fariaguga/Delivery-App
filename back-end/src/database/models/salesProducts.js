// import { DataTypes, Model } from 'sequelize';
// import db from '.';
// import Sale from './sale';
// import Product from './product';

// class SalesProducts extends Model {
//   saleId;
//   productId;
//   quantity;
// }

// SalesProducts.init(
//   {
//     saleId: {
//       allowNull: false,
//       primaryKey: true,
//       type: DataTypes.INTEGER,
//     },
//     productId: {
//       allowNull: false,
//       primaryKey: true,
//       type: DataTypes.INTEGER,
//     },
//     quantity: {
//       allowNull: false,
//       type: DataTypes.INTEGER,
//     },
//   },
//   {
//     underscored: true,
//     sequelize: db,
//     modelName: 'salesProducts',
//     timestamps: false,
//   }
// );

// SalesProducts.belongsTo(Sale, { foreignKey: 'saleId' });
// SalesProducts.belongsTo(Product, { foreignKey: 'productId' });

// Sale.hasMany(SalesProducts, { foreignKey: 'saleId' });
// Product.hasMany(SalesProducts, { foreignKey: 'productId' });

// export default SalesProducts;
