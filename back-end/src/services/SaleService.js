const Product = require('../database/models/product');
const SaleModel = require('../database/models/sale');
const SalesProducts = require('../database/models/salesProducts');

class SaleService {
  constructor(model = SaleModel, relationModel = SalesProducts) {
    this.model = model;
    this.relationModel = relationModel;
  }

  async createSale(sale) {
    const newSale = await this.model.create(sale);

    if (!newSale) {
      return { message: 'sale not created' };
    }

    return newSale;
  }

  async createSalesProducts(products, saleId) {
    await Promise.all(
      products.map((p) => this.relationModel.create({
          saleId,
          productId: p.id,
          quantity: p.quantity,
        })),
    );
  }

  async findOne(id) {
    const sale = await this.model.findOne({
      where: { id },
      include: {
          model: SalesProducts,
          as: 'sale',
          include: [{
            model: Product, 
            as: 'product',
          }],
          // through: { attributes: ['quantity'] },
        },
    });
    console.log(sale);
    return sale;
  }

  async updateStatus(id, status) {
    const statusUpdate = await this.model.update(
      {
        status,
      },
      {
        where: { id },
      },
    );
    await statusUpdate.save();
    console.log(statusUpdate);
    return statusUpdate;
  }
}

module.exports = SaleService;
