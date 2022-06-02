const ProductService = require('../services/ProductService');

class ProductController {
  constructor(service = new ProductService()) {
    this.service = service;

    this.findAll = this.findAll.bind(this);
  }

  async findAll(_req, res, _next) {
    try {
      const serviceResponse = await this.service.findAll();

      return res.status(200).json(serviceResponse);
    } catch (e) {
      console.error(e);
      // next(e);
    }
  }
}

module.exports = ProductController;
