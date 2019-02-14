const Product = use("App/Models/Product");

class ProductController {

  async index({ request, response, view }) {}


  async create({ request, response, view }) {}


  async store({ request, response }) {
    const data = request.all();

    const product = await Product.create(data);

    return product;
  }


  async show({ params, request, response, view }) {}


  async edit({ params, request, response, view }) {}


  async update({ params, request, response }) {}

  
  async destroy({ params, request, response }) {}
}

module.exports = ProductController;
