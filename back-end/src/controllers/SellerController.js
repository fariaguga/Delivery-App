const SellerService = require('../services/SellerService');

class SellerController {
  constructor(service = new SellerService()) {
    this.service = service;

    this.getAll = this.getAll.bind(this);
  }

  async getAll(req, res, _next) {
    try {
      const { authorization } = req.headers;
      const serviceResponse = await this.service.checkSale(authorization);

      if (!serviceResponse) {
        return res.status(404).json({ message: 'not found' });
      }

      return res.status(200).json(serviceResponse);
    } catch (e) {
      console.error(e);
      // next(e);
    }
  }
}

module.exports = SellerController;
