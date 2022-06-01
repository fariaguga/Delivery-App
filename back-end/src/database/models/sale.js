// import { DataTypes, Model } from 'sequelize';
// import db from '.';
// import User from './user';

// class Sale extends Model {
//   id;
//   userId;
//   sellerId;
//   totalPrice;
//   deliveryAddress;
//   deliveryNumber;
//   saleDate;
//   status;
// }

// Sale.init(
//   {
//     id: {
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true,
//       type: DataTypes.INTEGER,
//     },
//     userId: {
//       allowNull: false,
//       type: DataTypes.INTEGER,
//     },
//     sellerId: {
//       allowNull: false,
//       type: DataTypes.INTEGER,
//     },
//     totalPrice: {
//       allowNull: false,
//       type: DataTypes.DECIMAL(9, 2),
//     },
//     deliveryAddress: {
//       allowNull: false,
//       type: DataTypes.STRING,
//     },
//     deliveryNumber: {
//       allowNull: false,
//       type: DataTypes.STRING,
//     },
//     saleDate: {
//       allowNull: false,
//       type: DataTypes.DATE,
//     },
//     status: {
//       allowNull: false,
//       type: DataTypes.STRING,
//     },
//   },
//   {
//     underscored: true,
//     sequelize: db,
//     modelName: 'sales',
//     timestamps: false,
//   }
// );

// Sale.belongsTo(User, { foreignKey: 'userId' });
// Sale.belongsTo(User, { foreignKey: 'sellerId' });

// User.hasMany(Sale, { foreignKey: 'userId' });
// User.hasMany(Sale, { foreignKey: 'sellerId' });

// export default Sale;
