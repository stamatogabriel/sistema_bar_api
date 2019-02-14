const Product = use("App/Models/Product");

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
    const { description } = request.all();

    const product = await Product.find(description);

    return product;
  }

  async update({ params, request, response }) {
    const { description, price } = request.all();

    const product = await Product.findOrFail(params.id)

    product.description = description;
    product.price = price;

    product.save();

    return product;
  }


  async destroy({ params, request, response }) {
    await Product.findAndDelete(params.id);

  }
}

module.exports = ProductController;
