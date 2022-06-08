const SaleService = require('../services/SaleService');
const { jwtValidate } = require('../utils/auth');

class SaleController {
  constructor(service = new SaleService()) {
    this.service = service;

    this.create = this.create.bind(this);
  }

  async create(req, res, next) {
    try {
      const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, products } = req.body;
      const { authorization } = req.headers;

      jwtValidate(authorization);

      const createdSale = await this.service.createSale({ userId,
        sellerId,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
        saleDate: new Date(),
        status: 'Pendente',
      });

      if (!createdSale) return res.status(409).json({ message: 'sale not created' });

      await this.service.createSalesProducts(products, createdSale.id);

      return res.status(201).json(createdSale);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = SaleController;
