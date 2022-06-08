module.exports = {
    up: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkInsert(
        'sales',
        [
          {
            id: 1,
            user_id: 2,
            seller_id: 2,
            total_price: '39.40',
            delivery_address: 'bla bla bla',
            delivery_number: '56',
            sale_date: new Date(),
            status: 'Pendente'
          },
          {
            id: 2,
            user_id: 2,
            seller_id: 2,
            total_price: '56.40',
            delivery_address: 'bla bla bla',
            delivery_number: '987',
            sale_date: new Date(),
            status: 'Pendente'
          },
          {
            id: 3,
            user_id: 2,
            seller_id: 1,
            total_price: '396.40',
            delivery_address: 'bla bla bla',
            delivery_number: '565',
            sale_date: new Date(),
            status: 'Pendente'
          },
        ],
        { timestamps: false },
      );
    },
  
    down: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkDelete('sales', null, {});
    },
  };
  