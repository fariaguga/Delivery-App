'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      seller_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'seller_id',
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      total_price: {
        allowNull: false,
        field: 'total_price',
        type: Sequelize.DECIMAL(9, 2),
      },
      delivery_address: {
        allowNull: false,
        field: 'delivery_address',
        type: Sequelize.STRING,
      },
      delivery_number: {
        allowNull: false,
        field: 'delivery_number',
        type: Sequelize.STRING,
      },
      sale_date: {
        field: 'sale_date',
        allowNull: false,
        type: Sequelize.DATE,
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sales');
  },
};
