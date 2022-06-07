const SaleService = require('../services/SaleService');
const { jwtValidate } = require('../utils/auth');

class SaleController {
  constructor(service = new SaleService()) {
    this.service = service;

    this.create = this.create.bind(this);
  }

  async create(req, res, next) {
    try {
      const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber } = req.body;
      const { authorization } = req.headers;

      jwtValidate(authorization);

      const saleToCreate = { userId,
        sellerId,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
        saleDate: new Date(),
        status: 'pendente',
      };

      const createdSale = await this.service.createSale(saleToCreate);

      if (!createdSale) return res.status(409).json({ message: 'sale not created' });

      return res.status(201).json(createdSale);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = SaleController;
