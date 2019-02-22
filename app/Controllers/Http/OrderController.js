"use strict";
const Order = use("App/Models/Order");
const Database = use("Database");
const Ticket = use("App/Models/Ticket");
const Product = use('App/Models/Product')

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
    const order = await Order.findOrFail(params.id)
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

    const reuse = await Database.table('product_orders').where('order_id', order.id)

    reuse.map(reuse => {
      const prod = reuse.qnt;

      const product = await Product.find(reuse.product_id);

      console.log(reuse.product_id)
     /* await Database.table("products")
      .where("id", product.id)
      .update("stock", product.stock + prod);*/
    })


  //  await order.delete();

    return response.send("Ordem Deletada");
  }
}

module.exports = OrderController;
