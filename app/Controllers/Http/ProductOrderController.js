"use strict";
const ProductOrder = use("App/Models/ProductOrder");
const Order = use("App/Models/Order");
const Product = use("App/Models/Product");
const Database = use("Database");

class ProductOrderController {
  async index({ request, response, view }) {}

  async store({ request, response, params }) {
    const order = await Order.findOrFail(params.id);
    const data = request.only(["product_id", "qnt"]);
    const product = await Product.find(data.product_id);

    const productOrder = await ProductOrder.create({
      ...data,
      order_id: order.id,
      total: product.price * data.qnt
    });

    await Database.table("products")
      .where("id", product.id)
      .update("stock", product.stock - data.qnt);

    return productOrder;
  }

  async show({ params, request, response, view }) {}

  async update({ params, request, response }) {
    const { qnt } = request.all();

    const order = await ProductOrder.findOrFail(params.id);

    const product = await Product.find(order.product_id);

    order.qnt += qnt;

    order.total = order.qnt * product.price;

    await Database.table("products")
      .where("id", product.id)
      .update("stock", product.stock - qnt);

    order.save();

    return order;
  }

  async destroy({ params, request, response }) {}
}

module.exports = ProductOrderController;
