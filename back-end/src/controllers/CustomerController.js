const CustomerService = require('../services/CustomerService');

class CustomerController {
  constructor(service = new CustomerService()) {
    this.service = service;

    this.getAll = this.getAll.bind(this);
  }

  async getAll(req, res, _next) {
    try {
      const { authorization } = req.headers;
      const serviceResponse = await this.service.checkOrder(authorization);

      if (!serviceResponse) {
        return res.status(404).json({ message: 'not found' });
      }

      return res.status(200).json(serviceResponse);
    } catch (e) {
      console.error(e);
    }
  }
}

module.exports = CustomerController;
