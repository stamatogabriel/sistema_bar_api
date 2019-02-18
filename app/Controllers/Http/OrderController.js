'use strict'

const Order = use('App/Models/Order')
const OrderDesk = use('App/Models/OrderDesk')
const ProductDesk = use('App/Models/OrderProduct')
const Product = use('App/Models/Product')
const Desk = use('App/Models/Desk')

class OrderController {

  async index ({ request, response, view }) {
    const
  }


  async store ({ request, response }) {
    const { products, desks } = request.only(['product', 'desk']);
    const order = Order.create(
      products.map(product => {
        const prod = await Prouduct.findOrFail(product)
        ProductDesk.create({product_id: prod.id, order_id: order.id})
      }),
      desks.map(desk =>{
        const des = await Prouduct.findOrFail(desk)
        OrderDesk.create({desk_id: des.id, order_id: order.id})
      }));

      return order;

    }

  /**
   * Display a single order.
   * GET orders/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing order.
   * GET orders/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update order details.
   * PUT or PATCH orders/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a order with id.
   * DELETE orders/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = OrderController
