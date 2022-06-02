const { DataTypes, Model } = require('sequelize');
const db = require('.');

module.exports = () => {
  class Product extends Model {
    id;
    name;
    price;
    urlImage;
  }

  Product.init(
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
      price: {
        type: DataTypes.DECIMAL(4, 2),
        allowNull: false,
      },
      urlImage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      underscored: true,
      sequelize: db,
      modelName: 'Product',
      tableName: 'products',
      timestamps: false,
    }
  );

  return Product;
};
