"use strict";
const Order = use("App/Models/Order");
const Database = use("Database");
const Ticket = use("App/Models/Ticket");
const Product = use("App/Models/Product");

class OrderController {
  async index({ request, response, view }) {
    const orders = Order.query()
      .with("tickets")
      .with("product_orders")
      .with("products")
      .fetch();

    return orders;
  }

  async store({ request, response }) {
    const data = request.all();

    const ticket = await Ticket.find(data.ticket_id);

    if (ticket.inUse === true) {
      return response.send("Comanda em uso");
    }

    const order = await Order.create(data);

    await Database.table("tickets")
      .where("id", ticket.id)
      .update("inUse", true);

    return order;
  }

  async show({ params, request, response, view }) {
    const order = await Order.query()
      .where('id', params.id)
      .with("tickets")
      .with("product_orders")
      .with("products")
      .fetch();

    return order;
  }

  async update({ params, request, response }) {
    const { desk } = request.all();

    const order = await Order.findOrFail(params.id);

    order.desk = desk;

    order.save();

    return order;
  }

  async destroy({ params, request, response }) {
    const order = await Order.findOrFail(params.id);

    const ticket = await Ticket.find(order.ticket_id);

    await Database.table("tickets")
      .where("id", ticket.id)
      .update("inUse", false);

    const reuse = await Database.table("product_orders").where(
      "order_id",
      order.id
    );

    reuse.map(async item => {
      const qnt = item.qnt;
      const product = await Product.find(item.product_id);

      await Database.table("products")
        .where("id", item.product_id)
        .update("stock", product.stock + qnt);
    });

    await order.delete();

    return response.send("Ordem Deletada");
  }

  async payment({ params, request, response }) {
    const order = await Order.find(params.id);

    await Database.table("orders")
      .where("id", order.id)
      .update("close", true);

    await Database.table("tickets")
      .where("id", order.ticket_id)
      .update("inUse", false);

    await order.save();
  }

  async showOrder ({params, request}){
    const order = await Order.query()
    .where('ticket_id', params.id)
    .with("tickets")
    .with("product_orders")
    .with("products")
    .fetch();

  return order;
  }

}

module.exports = OrderController;
