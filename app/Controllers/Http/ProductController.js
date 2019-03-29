const Product = use("App/Models/Product");
const Database = use('Database')

class ProductController {

  async index({ request, response, view }) {
    const products = await Product.all();

    return products;
  }

  async store({ request, response }) {
    const data = request.all();

    const product = await Product.create(data);

    return product;
  }

  async show({ params, request, response, view }) {
    const product = await Product.findOrFail(params.id)

    return product;
  }


  async search({ params, request, response, view }) {
    const { description } = request.all();

    const product = await Database.from('products').where('description', 'like', `%${description}%`);

    return product;
  }

  async update({ params, request, response }) {
    const { stock, price, minStock } = request.all();

    const product = await Product.findOrFail(params.id)

    product.price = price;
    product.stock = stock;
    product.minStock = minStock;

    product.save();

    return product;
  }


  async destroy({ params, request, response }) {
    const product = await Product.findOrFail(params.id);

    await product.delete();

  }
}

module.exports = ProductController;
