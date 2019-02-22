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

    const info = await Database.from("product_orders")
      .sum("total")
      .where("order_id", order.id);
    const totalComanda = info[0];

    await Database.table("orders")
      .where("id", order.id)
      .update("total_comanda", totalComanda.sum);

    return productOrder;
  }

  async show({ params, request, response, view }) {
    const op = await ProductOrder.findOrFail(params.id);

    return op;
  }

  async update({ params, request, response }) {
    const { qnt } = request.all();

    const order = await ProductOrder.findOrFail(params.id);

    const product = await Product.find(order.product_id);

    order.qnt += qnt;

    order.total = order.qnt * product.price;

    await Database.table("products")
      .where("id", product.id)
      .update("stock", product.stock - qnt);

    const info = await Database.from("product_orders")
      .sum("total")
      .where("order_id", order.id);
      
    const totalComanda = info[0];

    await Database.table("orders")
      .where("id", order.id)
      .update("total_comanda", totalComanda.sum);

    await order.save();

    return order;
  }

  async destroy({ params, request, response }) {
    const op = await ProductOrder.findOrFail(params.id);

    const product = await Product.find(op.product_id);

    await Database.table("products")
      .where("id", product.id)
      .update("stock", product.stock + op.qnt);

    await op.delete();

    return response.send("Produto deletado");
  }
}

module.exports = ProductOrderController;
