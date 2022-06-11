const SaleService = require('../services/SaleService');
const { jwtValidate } = require('../utils/auth');

class SaleController {
  constructor(service = new SaleService()) {
    this.service = service;

    this.create = this.create.bind(this);
    this.findOne = this.findOne.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
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

  async findOne(req, res, next) {
    try {
      const { authorization } = req.headers;
      const { id } = req.params;
      jwtValidate(authorization);
      const serviceResponse = await this.service.findOne(id);
      return res.status(200).json(serviceResponse);
    } catch (error) {
      next(error);
    }
  }

  async updateStatus(req, res, next) {
    try {
      const { authorization } = req.headers;
      const { id } = req.params;
      const { status } = req.body;
      jwtValidate(authorization);
      const serviceResponse = await this.service.updateStatus(id, status);
      return res.status(200).json(serviceResponse);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = SaleController;
