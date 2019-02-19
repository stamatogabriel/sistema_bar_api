"use strict";
const Order = use("App/Models/Order");
const Database = use('Database');
const Product = use('App/Models/Product');
const Ticket = use('App/Models/Ticket');
const ProductOrder = use('App/Models/ProductOrder');

class OrderController {
  async index({ request, response, view }) {
    const orders = await Order.all();

    return orders;
  }

  async store({ request, response }) {
    const data = request.all();

    const order = await Order.create(data);

    return order;
  }


  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing order.
   * GET orders/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update order details.
   * PUT or PATCH orders/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a order with id.
   * DELETE orders/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = OrderController;
