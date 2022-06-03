const SellerService = require('../services/SellerService');

class SellerController {
  constructor(service = new SellerService()) {
    this.service = service;

    this.getAll = this.getAll.bind(this);
  }

  async getAll(req, res, _next) {
    try {
      const { seller_id } = req.params;
      const serviceResponse = await this.service.checkSale(seller_id);

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
